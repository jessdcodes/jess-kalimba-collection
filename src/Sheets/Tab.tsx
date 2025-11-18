export function Sheets({ tabsUrl, title }: { tabsUrl: string; title: string }) {
  return (
    <li>
      <label>{title}</label>
      <iframe
        src={tabsUrl}
        title={title}
        frameBorder="0"
        width={300}
        height={400}
      ></iframe>
    </li>
  );
}
