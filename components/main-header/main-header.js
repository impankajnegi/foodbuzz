

import Link from "next/link";
import logoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackgrounf from "./main-header-backgrount";
import NavLink from "./nav-link";


export default function MainHeader(){

    return <>
    <MainHeaderBackgrounf></MainHeaderBackgrounf>
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
        <Image src={logoImage} alt="a plate" priority></Image>
        NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                   <NavLink href="/meals">Browse Meal</NavLink>
                </li>

                <li>
                <NavLink href="/community">Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
    </header></>
}