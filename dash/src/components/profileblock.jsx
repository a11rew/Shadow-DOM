import { RiLayoutGridFill } from "react-icons/ri";
import { RiNotification3Fill } from "react-icons/ri";

import imgUrl from "@/assets/asset_profile.png";

const ProfileBlock = () => {
  return (
    <div className="flex items-center text-3xl gap-4 mr-5">
      <RiLayoutGridFill role="button" />
      <RiNotification3Fill role="button" />
      <img src={imgUrl} role="button" className="h-10 rounded-full" />
    </div>
  );
};

export default ProfileBlock;
