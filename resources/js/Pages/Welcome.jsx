import About from "@/Components/About";
import Banner from "@/Components/Banner";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import Modal from "@/Components/Modal";
import Navbar from "@/Components/Navbar";
import Productos from "@/Components/Productos";
import Separador from "@/Components/Separador";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <Navbar></Navbar>
            <Banner></Banner>
            <Separador></Separador>
            <Productos></Productos>
            <Separador></Separador>
            <About></About>
            <Separador></Separador>
            <ContactForm></ContactForm>
            <Separador></Separador>
            <Footer></Footer>
        </>
    );
}
