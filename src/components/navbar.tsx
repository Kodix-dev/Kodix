//import { Link } from "@heroui/link";
import { Link } from "react-router-dom";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky" shouldHideOnScroll>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            to="/"
          >
            <Logo />
            <p className="font-bold text-inherit">KODIX</p>
          </Link>
        </NavbarBrand>
        <div className="hidden sm:flex lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                to={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link to={siteConfig.links.instagram} title="Twitter">
            <InstagramIcon className="text-default-500" />
          </Link>
          <Link  to={siteConfig.links.facebook} title="Twitter">
            <FacebookIcon className="text-default-500" />
          </Link>
          <Link  to={siteConfig.links.twitter} title="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link  to={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                to={item.href}
                
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="mt-10"><h2 className="font-bold flex justify-center">Follow Us</h2></div>
          <div className="flex gap-10 mt-2 justify-center">
          <NavbarMenuItem>
            <Link  to={siteConfig.links.instagram} title="Twitter">
              <InstagramIcon className="text-default-500" />
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link to={siteConfig.links.facebook} title="Twitter">
              <FacebookIcon className="text-default-500" />
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link to={siteConfig.links.twitter} title="Twitter">
              <TwitterIcon className="text-default-500" />
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link to={siteConfig.links.github} title="GitHub">
              <GithubIcon className="text-default-500" />
            </Link>
          </NavbarMenuItem>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
