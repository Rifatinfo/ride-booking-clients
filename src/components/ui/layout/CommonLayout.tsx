import type { ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
// import Navbar from "./Navbar";

interface IProps {
    children : ReactNode
}

const CommonLayout = ({children} : IProps) => {
    return (
        <div>
            {/* <Navbar/> */}
            <Nav/>
            {children}
            <Footer/>
        </div>
    );
};

export default CommonLayout;