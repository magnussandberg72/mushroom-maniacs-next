// Path: app/donate/charity/[id]/page.tsx
interface Props {
  params: { id: string };
  }

  export default function CharityDetailPage({ params }: Props) {
    return (
        <div className="p-6">
              <h1 className="text-xl font-bold">Charity ID: {params.id}</h1>
                    <p>Detaljerad info om detta projekt kommer här.</p>
                        </div>
                          );
                          }
