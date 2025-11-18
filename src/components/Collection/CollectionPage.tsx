import { PlayerCard } from "../Player/PlayerCard";
import { TracksList } from "../Player/TracksList";

declare global {
  interface Track {
    songTitle: string;
    artist: string;
    tabsUrl: string;
  }
}

const tracksList: Track[] = [
  {
    songTitle: "A Walk",
    artist: "Yerin Baek",
    tabsUrl:
      "https://www.tabwhale.com/embed/cmh9wr03m0009h522tdwfqgic/ce77a3fdfaa97cef426a82b773f96e1c?instrument=kalimba&viewer=tab&note-notation=letters&accidentals-notation=sharp",
  },
  {
    songTitle: "Still",
    artist: "Day6",
    tabsUrl:
      "https://www.tabwhale.com/embed/cmhhw0jez00024l28gro1jtbb/e5acc18616d140068574fe7796f8a41e?instrument=kalimba&viewer=tab&note-notation=letters&accidentals-notation=sharp",
  },
  {
    songTitle: "title 3",
    artist: "artist 3",
    tabsUrl:
      "https://www.tabwhale.com/embed/cmhhw0jez00024l28gro1jtbb/e5acc18616d140068574fe7796f8a41e?instrument=kalimba&viewer=tab&note-notation=letters&accidentals-notation=sharp",
  },
];

export function CollectionPage() {
  return (
    <>
      <PlayerCard />
      <TracksList tracksList={tracksList} />
    </>
  );
}
