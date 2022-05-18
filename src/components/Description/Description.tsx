import React from "react";
import Footer from "../Footer/Footer";
import "./description.scss";

const Description = () => {
    return (
        <>
            <div className="description__section">
                <h2 className="description__section_title">Aplikacja ma się składać z minimum 3 ekranów:</h2>
                <ol className="description__section_ordered-list">
                    <li className="description__section_ordered-list_item">Wyszukiwarka projektów githubowych</li>
                    <li className="description__section_ordered-list_item">Założenia całej aplikacji</li>
                    <li className="description__section_ordered-list_item">Wyliczanie silni</li>
                </ol>
                <h3 className="description__section_title small">Ad 1:</h3>
                <ul className="description__section_main-list">
                    <li className="description__section_main-list_item">Wykorzystane jest publiczne API Githuba;</li>
                    <li className="description__section_main-list_item">
                        Czeka na podanie loginu użytkownika:
                        <ul className="description__section_secondary-list">
                            <li className="description__section_secondary-list_item">waliduje poprawność;</li>
                            <li className="description__section_secondary-list_item">
                                obsługuje nieistniejące loginy;
                            </li>
                        </ul>
                    </li>
                    <li className="description__section_main-list_item">
                        wyświetla maksymalnie 5 projektów w kolejności od ostatnio updatowanego:
                        <ul className="description__section_secondary-list">
                            <li className="description__section_secondary-list_item">
                                wyświetla maksymalnie 5 commitów każdego z projektów;
                            </li>
                        </ul>
                    </li>
                </ul>
                <h3 className="description__section_title small">Ad 2:</h3>
                <ul className="description__section_main-list">
                    <li className="description__section_main-list_item">
                        wyświetla niniejszą treść (listę wymagań) z podobnym (takim samym) podziałem i układem;
                    </li>
                    <li className="description__section_main-list_item">
                        {" "}
                        proszę zawrzeć też autora aplikacji - własne imię i nazwisko (Karol Mika);
                    </li>
                </ul>
                <h3 className="description__section_title small">Ad 3:</h3>
                <ul className="description__section_main-list">
                    <li className="description__section_main-list_item">
                        input do podania liczby dla której będzie wyliczona{" "}
                        <a href="https://pl.wikipedia.org/wiki/Silnia">silnia</a>;
                    </li>
                    <li className="description__section_main-list_item">historia poprzednich wyliczeń.</li>
                </ul>
                <h3 className="description__section_title small">Ogólne:</h3>
                <ul className="description__section_main-list">
                    <li className="description__section_main-list_item">
                        korzysta z <strong>LESS / SASS.</strong> Spełnia wymogi <strong>BEM.</strong> Jest też{" "}
                        <strong>estetyczna;</strong>
                    </li>
                    <li className="description__section_main-list_item">
                        wyświetla <strong>co drugi</strong> element każdej listy wyróżnionym kolorem;
                    </li>
                    <li className="description__section_main-list_item">
                        jest <strong>hostowana</strong> (github pages, heroku, itd..), a jej kod jest dostępny
                        publicznie;
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default Description;
