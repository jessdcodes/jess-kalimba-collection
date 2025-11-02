import { Sheets } from "./Tab";

const kalimbaTabs = [
  {
    tabsUrl:
      "https://www.tabwhale.com/embed/cmh9wr03m0009h522tdwfqgic/ce77a3fdfaa97cef426a82b773f96e1c?instrument=kalimba&viewer=tab&note-notation=letters&accidentals-notation=sharp",
    title: "A Walk - Yerin Baek (Cover)",
  },
  {
    tabsUrl:
      "https://www.tabwhale.com/embed/cmhhw0jez00024l28gro1jtbb/e5acc18616d140068574fe7796f8a41e?instrument=kalimba&viewer=tab&note-notation=letters&accidentals-notation=sharp",
    title: "Still - Day6",
  },
];

export const TabsList = () => {
  return (
    <div>
      {" "}
      {kalimbaTabs.map((tab, index) => {
        return <Sheets key={index} tabsUrl={tab.tabsUrl} title={tab.title} />;
      })}
    </div>
  );
};
