import Link from "next/link";
import Image from "next/image";

//Components
import Logger from "./Logger";

export default function NavbarDesk() {
    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li>
                        <Image
                            aria-hidden
                            src="/Logo.png"
                            alt="QUICK BET ICON"
                            width={164}
                            height={42}
                        />
                        </li>
                        <li>
                            <Link href="/">
                                Popular
                            </Link>
                        </li>
                        <li>
                            <Link href="/favorites">
                                Favorites
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <Logger />   
            </div>
        </>
    )
}