import { useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import {
  useGetEntriesQuery,
  useSearchEntryQuery,
} from "../redux/api/entriesApiSlice";
import EntryCard from "../components/entry/EntryCard";
import AddEntry from "../components/entry/AddEntry";
import Loader from "../components/Loader";

const Entries = () => {
  const user = useSelector((state) => state.user);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const { data: getEntries, isLoading: isLoadingEntries } = useGetEntriesQuery(
    undefined,
    { skip: searchQuery.length > 0 }
  );

  const { data: searchResult, isLoading: isLoadingSearch } =
    useSearchEntryQuery(searchQuery, {
      skip: searchQuery.length === 0,
    });

  if (isLoadingEntries || isLoadingSearch) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100dvh-64px-52px)]">
        <Loader />
      </div>
    );
  }

  const entries =
    searchQuery.length > 0 ? searchResult?.data || [] : getEntries?.data || [];

  if (entries.length === 0) {
    if (searchResult) {
      return (
        <div className="text-center mt-10 mx-7 min-h-[calc(100dvh-64px-52px-40px)]">
          <p className="text-2xl font-semibold mb-2">
            Sorry, {user.data.firstName}. No entries matched your search.
          </p>
          <p className="text-lg">
            No entries match your search. Try different keywords and try again.
          </p>
          <div className="fixed bottom-20 z-10 left-[calc(100vw-7rem)]">
            <AddEntry />
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-center mt-10 mx-7 min-h-[calc(100dvh-64px-52px-40px)]">
          <p className="text-2xl font-semibold mb-2">
            Welcome, {user.data.firstName}
          </p>
          <p className="text-lg mb-2">
            It looks like you haven't added any entries yet.
          </p>
          <p className="text-lg">
            Kick off your journey by creating your first entry—just hit the '+'
            button below.
          </p>
          <div className="fixed bottom-20 z-10 left-[calc(100vw-7rem)]">
            <AddEntry />
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <div className="fixed bottom-20 z-10 left-[calc(100vw-7rem)]">
        <AddEntry />
      </div>
      <div className="flex flex-wrap gap-10 justify-center my-10 min-h-[calc(100dvh-64px-52px-80px)] mx-7">
        {entries.map((entry) => (
          <EntryCard
            key={entry._id}
            id={entry._id}
            date={entry.date}
            title={entry.title}
            mood={entry.mood}
            content={entry.content}
            updatedAt={entry.updatedAt}
            highlightText={searchQuery}
          />
        ))}
      </div>
    </div>
  );
};
export default Entries;
