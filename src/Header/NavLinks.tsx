import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Upload job", url: "/upload-job" },
    { name: "About us", url: "/about" },
  ];

  const location = useLocation();
  return (
    <div className="flex gap-5 h-full items-center">
      {links.map((link, index) => <div className={'border-t-[3px] h-full'}>
        <Link key={index} to={link.url}>
          {link.name}
        </Link>
        </div>
      )}
    </div>
  );
};
export default NavLinks;
