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

  if (!user) return <Navigate to="/login" replace />;

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
      <div className="flex justify-center items-center min-h-[calc(100dvh-64px-52px)] bg-[#0f0f0f] text-gray-200">
        <Loader />
      </div>
    );
  }

  const entries =
    searchQuery.length > 0 ? searchResult?.data || [] : getEntries?.data || [];

  const EmptyState = ({ title, subtitle }) => (
    <div className="text-center px-6 py-16 min-h-[calc(100dvh-64px-52px-40px)] bg-[#0f0f0f] text-gray-300">
      <p className="text-2xl font-semibold mb-4">{title}</p>
      <p className="text-lg text-gray-400">{subtitle}</p>
      <div className="fixed bottom-16 right-10 z-10">
        <AddEntry />
      </div>
    </div>
  );

  if (entries.length === 0) {
    return searchResult ? (
      <EmptyState
        title={`No luck, ${user.data.firstName}.`}
        subtitle="Nothing matches your search. Try different keywords."
      />
    ) : (
      <EmptyState
        title={`Welcome, ${user.data.firstName}`}
        subtitle="Looks like your journal’s empty. Hit the + button to start writing."
      />
    );
  }

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-gray-200 px-6 pb-20 pt-6">
      <div className="fixed bottom-16 right-10 z-10">
        <AddEntry />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
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
