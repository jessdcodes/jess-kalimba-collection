export function Sheets({ tabsUrl, title }: { tabsUrl: string; title: string }) {
  return (
    <div>
      <iframe
        src={tabsUrl}
        title={title}
        frameBorder="0"
        width={500}
        height={600}
      ></iframe>
    </div>
  );
}
