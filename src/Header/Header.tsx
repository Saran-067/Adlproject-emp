import { Avatar, Indicator } from "@mantine/core";
import {
  IconBell,
  IconBriefcaseFilled,
  IconSettings,
} from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center">
      <div className="flex gap-3 items-center text-bright-sun-400">
        <IconBriefcaseFilled className="h-10 w-9" />
        <div className="text-3xl font-semibold">JobHooks</div>
      </div>
      {NavLinks()}
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-2">
          <div>Ashwath</div>
          <Avatar src="avatar1.png" alt="it's me" />
        </div>
        <div className="bg-mine-shaft-900 pd-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 pd-1.5 rounded-full">
          <Indicator color="bright-sun.4" offset={6} size={8} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};
export default Header;
