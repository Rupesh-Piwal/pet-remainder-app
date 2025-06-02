import ReminderCard from "@/components/dashboard/remainder-card";
import Header from "@/components/dashboard/header";
import Streak from "@/components/dashboard/streak";
import SectionHeader from "@/components/dashboard/section-header";

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl m-auto">
        <Header />
        <Streak />
        <SectionHeader title="AfterNoon" />
        <ReminderCard title="Walk" pet="Dog" time={2} frequency="Monthly" />
        <ReminderCard
          title="Lunch"
          pet="Browny"
          time={2}
          frequency="Everyday"
        />
        <ReminderCard
          title="Breakfast"
          pet="Cat"
          time={2}
          frequency="Monthly"
        />
        <SectionHeader title="pending goals" />
        <ReminderCard
          title="vet visit"
          pet="Cat"
          time={2}
          frequency="Monthly"
        />
        <SectionHeader title="pending goals" />
        <ReminderCard
          title="vet visit"
          pet="Cat"
          time={2}
          frequency="Monthly"
        />
      </div>
    </div>
  );
}
