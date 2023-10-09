import getWikiResult from '@/lib/getWikiResult';
import Item from './components/Item';

type Props = {
    params: {
        searchTerm: string;
    };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
    const wikiData: Promise<SearchResult> = getWikiResult(searchTerm);
    const data = await wikiData;
    const dysplayTerm = searchTerm.replaceAll('%20', ' ');

    if (!data?.query?.pages) return { title: `${dysplayTerm}` };

    return { title: dysplayTerm, descripotion: `Result for ${searchTerm}` };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
    const wikiData: Promise<SearchResult> = getWikiResult(searchTerm);
    const data = await wikiData;
    const results: Result[] | undefined = data?.query?.pages;

    const content = (
        <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
            {results ? (
                Object.values(results).map((result) => {
                    return <Item key={result.pageid} result={result} />;
                })
            ) : (
                <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
            )}
        </main>
    );

    return content;
}
