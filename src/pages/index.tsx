import DefaultLayout from "@/layouts/default";
import {Image} from "@heroui/react";


export default function IndexPage() {
  return (
    <DefaultLayout>
      <Image
      isBlurred
      alt="HeroUI Album Cover"
      className="m-5"
      src="https://heroui.com/images/album-cover.png"
      style={{
        width: "100vw",
        height: "50vh",
      }}
    />
    </DefaultLayout>
  );
}
