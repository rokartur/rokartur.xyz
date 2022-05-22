import React from 'react';
import {Event} from "../components/Event/Event";
import {SubpageText} from "../components/SubpageText";
import {BackButtonExperience} from "../components/BackButton/BackButton";
import "../assets/styles/Subpage.scss";
import "./Experience.scss";

export default function Experience() {
    return (
        <div className="experience">
            <header className="global_subpage_header">
                <BackButtonExperience/>
            </header>

            <SubpageText title="What can I do?" overline="All began in 2018..." color="blue"/>

            <div className="timeline">
                <div className="clock_line">
                    <svg width="20" height="1620" viewBox="0 0 20 1620" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M10.0001 18.3333C14.6025 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6025 1.66667 10.0001 1.66667C5.39771 1.66667 1.66675 5.39763 1.66675 10C1.66675 14.6024 5.39771 18.3333 10.0001 18.3333Z" fill="#D1D5DB"/>
                        <path d="M13.0916 13.275C12.9833 13.275 12.875 13.25 12.775 13.1833L10.1916 11.6417C9.54995 11.2583 9.07495 10.4167 9.07495 9.675V6.25833C9.07495 5.91667 9.35828 5.63333 9.69995 5.63333C10.0416 5.63333 10.325 5.91667 10.325 6.25833V9.675C10.325 9.975 10.575 10.4167 10.8333 10.5667L13.4166 12.1083C13.7166 12.2833 13.8083 12.6667 13.6333 12.9667C13.5083 13.1667 13.3 13.275 13.0916 13.275Z" fill="#D1D5DB"/>
                        <line x1="10" y1="26" x2="9.99999" y2="314" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
                        <path opacity="0.4" d="M10.0001 338.333C14.6025 338.333 18.3334 334.602 18.3334 330C18.3334 325.398 14.6025 321.667 10.0001 321.667C5.39771 321.667 1.66675 325.398 1.66675 330C1.66675 334.602 5.39771 338.333 10.0001 338.333Z" fill="#D1D5DB"/>
                        <path d="M13.0916 333.275C12.9833 333.275 12.875 333.25 12.775 333.183L10.1916 331.642C9.54995 331.258 9.07495 330.417 9.07495 329.675V326.258C9.07495 325.917 9.35828 325.633 9.69995 325.633C10.0416 325.633 10.325 325.917 10.325 326.258V329.675C10.325 329.975 10.575 330.417 10.8333 330.567L13.4166 332.108C13.7166 332.283 13.8083 332.667 13.6333 332.967C13.5083 333.167 13.3 333.275 13.0916 333.275Z" fill="#D1D5DB"/>
                        <line x1="10" y1="346" x2="9.99999" y2="634" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
                        <path opacity="0.4" d="M10.0001 658.333C14.6025 658.333 18.3334 654.602 18.3334 650C18.3334 645.398 14.6025 641.667 10.0001 641.667C5.39771 641.667 1.66675 645.398 1.66675 650C1.66675 654.602 5.39771 658.333 10.0001 658.333Z" fill="#D1D5DB"/>
                        <path d="M13.0916 653.275C12.9833 653.275 12.875 653.25 12.775 653.183L10.1916 651.642C9.54995 651.258 9.07495 650.417 9.07495 649.675V646.258C9.07495 645.917 9.35828 645.633 9.69995 645.633C10.0416 645.633 10.325 645.917 10.325 646.258V649.675C10.325 649.975 10.575 650.417 10.8333 650.567L13.4166 652.108C13.7166 652.283 13.8083 652.667 13.6333 652.967C13.5083 653.167 13.3 653.275 13.0916 653.275Z" fill="#D1D5DB"/>
                        <line x1="10" y1="666" x2="9.99999" y2="954" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
                        <path opacity="0.4" d="M10.0001 978.333C14.6025 978.333 18.3334 974.602 18.3334 970C18.3334 965.398 14.6025 961.667 10.0001 961.667C5.39771 961.667 1.66675 965.398 1.66675 970C1.66675 974.602 5.39771 978.333 10.0001 978.333Z" fill="#D1D5DB"/>
                        <path d="M13.0916 973.275C12.9833 973.275 12.875 973.25 12.775 973.183L10.1916 971.642C9.54995 971.258 9.07495 970.417 9.07495 969.675V966.258C9.07495 965.917 9.35828 965.633 9.69995 965.633C10.0416 965.633 10.325 965.917 10.325 966.258V969.675C10.325 969.975 10.575 970.417 10.8333 970.567L13.4166 972.108C13.7166 972.283 13.8083 972.667 13.6333 972.967C13.5083 973.167 13.3 973.275 13.0916 973.275Z" fill="#D1D5DB"/>
                        <line x1="10" y1="986" x2="9.99999" y2="1274" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
                        <path opacity="0.4" d="M10.0001 1298.33C14.6025 1298.33 18.3334 1294.6 18.3334 1290C18.3334 1285.4 14.6025 1281.67 10.0001 1281.67C5.39771 1281.67 1.66675 1285.4 1.66675 1290C1.66675 1294.6 5.39771 1298.33 10.0001 1298.33Z" fill="#D1D5DB"/>
                        <path d="M13.0916 1293.27C12.9833 1293.27 12.875 1293.25 12.775 1293.18L10.1916 1291.64C9.54995 1291.26 9.07495 1290.42 9.07495 1289.67V1286.26C9.07495 1285.92 9.35828 1285.63 9.69995 1285.63C10.0416 1285.63 10.325 1285.92 10.325 1286.26V1289.67C10.325 1289.97 10.575 1290.42 10.8333 1290.57L13.4166 1292.11C13.7166 1292.28 13.8083 1292.67 13.6333 1292.97C13.5083 1293.17 13.3 1293.27 13.0916 1293.27Z" fill="#D1D5DB"/>
                        <line x1="10" y1="1306" x2="9.99999" y2="1594" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
                        <path opacity="0.4" d="M10.0001 1618.33C14.6025 1618.33 18.3334 1614.6 18.3334 1610C18.3334 1605.4 14.6025 1601.67 10.0001 1601.67C5.39771 1601.67 1.66675 1605.4 1.66675 1610C1.66675 1614.6 5.39771 1618.33 10.0001 1618.33Z" fill="#D1D5DB"/>
                        <path d="M13.0916 1613.27C12.9833 1613.27 12.875 1613.25 12.775 1613.18L10.1916 1611.64C9.54995 1611.26 9.07495 1610.42 9.07495 1609.67V1606.26C9.07495 1605.92 9.35828 1605.63 9.69995 1605.63C10.0416 1605.63 10.325 1605.92 10.325 1606.26V1609.67C10.325 1609.97 10.575 1610.42 10.8333 1610.57L13.4166 1612.11C13.7166 1612.28 13.8083 1612.67 13.6333 1612.97C13.5083 1613.17 13.3 1613.27 13.0916 1613.27Z" fill="#D1D5DB"/>
                    </svg>
                </div>

                <div className="events">
                    <Event
                        eventDate="November 2018"
                        eventTag={
                            <div className="event_tag">
                                <div id="nov_2018">
                                    <svg className="event_tag_icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M3.43341 1.66667H16.5751C17.0751 1.66667 17.4584 2.1 17.4001 2.59167L15.9001 16.1083C15.8668 16.4417 15.6251 16.725 15.3001 16.8167L10.2334 18.2667C10.0834 18.3083 9.92506 18.3083 9.77506 18.2667L4.70843 16.8167C4.38343 16.725 4.15007 16.4417 4.1084 16.1083L2.60841 2.59167C2.55008 2.1 2.93341 1.66667 3.43341 1.66667Z" fill="#F59E0B"/>
                                        <path d="M8.85003 13.9499C8.7917 13.9499 8.73335 13.9416 8.67502 13.9249L6.07502 13.1749C5.74169 13.0749 5.55006 12.7333 5.65006 12.3999C5.74173 12.0666 6.09172 11.8833 6.42506 11.9749L8.22503 12.4916V5.84162C8.22503 5.49995 8.50837 5.21662 8.85003 5.21662C9.1917 5.21662 9.47503 5.49995 9.47503 5.84162V13.3166C9.47503 13.5166 9.38338 13.6999 9.22504 13.8166C9.11671 13.8999 8.98337 13.9499 8.85003 13.9499Z" fill="#F59E0B"/>
                                        <path d="M10.7503 13.9583C10.4669 13.9583 10.2169 13.7666 10.1419 13.4833C10.0586 13.15 10.2586 12.8083 10.6002 12.725L13.1253 12.0916V10.675L11.2169 10.95C11.0336 10.975 10.8586 10.925 10.7169 10.8C10.5836 10.6833 10.5002 10.5083 10.5002 10.325V6.20828C10.5002 5.89995 10.7252 5.63329 11.0336 5.59162L13.6586 5.21662C14.0003 5.16662 14.3169 5.40829 14.3669 5.74995C14.4169 6.09162 14.1752 6.40829 13.8336 6.45828L11.7502 6.74995V9.60828L13.6586 9.33328C13.8419 9.30828 14.0169 9.35828 14.1586 9.48328C14.2919 9.59995 14.3753 9.77495 14.3753 9.95828V12.5833C14.3753 12.8666 14.1836 13.1166 13.9002 13.1916L10.9003 13.9416C10.8503 13.95 10.8003 13.9583 10.7503 13.9583Z" fill="#F59E0B"/>
                                    </svg>

                                    <span id="nov_2018_text" className="event_tag_text">
                                        Learning a first language
                                    </span>
                                </div>
                            </div>
                        }
                        eventTitle="Lorem ipsum"
                        eventDescription="Ipsum velit amet amet et dolor laboris non non culpa quis et cillum qui ipsum. Est eu irure reprehenderit eiusmod. In occaecat cupidatat aute anim id. Ea sunt elit consectetur occaecat in aliqua eu non laborum nisi ea dolor ea. Pariatur ut cillum adipisicing quis adipisicing mollit ullamco amet labore in amet commodo. Sit do nisi eu irure dolor voluptate."
                    />
                    <Event
                        eventDate="January 2019"
                        eventTag={
                            <div className="event_tag">
                                <div id="jan_2019">
                                    <svg className="event_tag_icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5166 1.85839C10.8499 1.60006 9.14997 1.60006 7.4833 1.85839C6.79997 1.96673 6.29996 2.55005 6.29996 3.23339V6.30005H3.2333C2.54996 6.30005 1.96663 6.80006 1.8583 7.48339C1.59997 9.15006 1.59997 10.8501 1.8583 12.5167C1.96663 13.2001 2.54996 13.7001 3.2333 13.7001H6.29996V11.8501C6.29996 10.8251 7.12496 10.0001 8.14996 10.0001H11.85C12.875 10.0001 13.7 9.16672 13.7 8.15005V3.23339C13.7 2.55005 13.2 1.96673 12.5166 1.85839ZM8.60828 4.65006C8.26661 4.65006 7.93328 4.32505 7.93328 3.97505C7.93328 3.62505 8.25828 3.30839 8.60828 3.30839C8.76661 3.30839 8.9583 3.38339 9.07497 3.49172C9.19997 3.60839 9.2833 3.80839 9.2833 3.97505C9.2833 4.32505 8.95828 4.65006 8.60828 4.65006Z" fill="#FFFFFF"/>
                                        <path opacity="0.4" d="M18.1415 7.48339C18.0331 6.80005 17.4498 6.30005 16.7665 6.30005H13.6998V8.15005C13.6998 9.16672 12.8748 10.0001 11.8498 10.0001H8.14981C7.12481 10.0001 6.2998 10.8251 6.2998 11.8501V16.7667C6.2998 17.4501 6.79982 18.0334 7.48315 18.1417C9.14982 18.4 10.8498 18.4 12.5165 18.1417C13.1998 18.0334 13.6998 17.4501 13.6998 16.7667V13.7001H16.7665C17.4498 13.7001 18.0331 13.2 18.1415 12.5167C18.3998 10.85 18.3998 9.15005 18.1415 7.48339ZM11.3915 16.6917C11.0498 16.6917 10.7165 16.3667 10.7165 16.0167C10.7165 15.6667 11.0415 15.3417 11.3915 15.3417C11.5498 15.3417 11.7415 15.4167 11.8581 15.525C11.9831 15.6417 12.0665 15.8417 12.0665 16.0084C12.0581 16.3667 11.7332 16.6917 11.3915 16.6917Z" fill="#FFFFFF"/>
                                    </svg>

                                    <span className="event_tag_text">
                                        Learning a new language
                                    </span>
                                </div>
                            </div>
                        }
                        eventTitle="Lorem ipsum"
                        eventDescription="Ipsum velit amet amet et dolor laboris non non culpa quis et cillum qui ipsum. Est eu irure reprehenderit eiusmod. In occaecat cupidatat aute anim id. Ea sunt elit consectetur occaecat in aliqua eu non laborum nisi ea dolor ea. Pariatur ut cillum adipisicing quis adipisicing mollit ullamco amet labore in amet commodo. Sit do nisi eu irure dolor voluptate."
                    />
                    <Event
                        eventDate="January 2020"
                        eventTag={
                            <div className="event_tag">
                                <div id="jan_2020">
                                    <svg className="event_tag_icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M18.3332 6.66669V13.4917C18.3332 16.525 16.5248 18.3334 13.4915 18.3334H6.50817C3.47484 18.3334 1.6665 16.525 1.6665 13.4917V6.67502L18.3332 6.66669Z" fill="#16A34A"/>
                                        <path d="M7.49997 14.7917C7.4083 14.7917 7.3083 14.7667 7.22497 14.725C6.5833 14.4 6.0333 13.9167 5.6333 13.3167C5.29997 12.8167 5.29997 12.175 5.6333 11.675C6.0333 11.075 6.5833 10.5917 7.22497 10.275C7.5333 10.1167 7.9083 10.25 8.06663 10.5584C8.22497 10.8667 8.09997 11.2417 7.7833 11.4C7.3333 11.625 6.94997 11.9667 6.67497 12.3834C6.62497 12.4584 6.62497 12.5584 6.67497 12.6417C6.94997 13.0584 7.3333 13.4 7.7833 13.625C8.09163 13.7834 8.21663 14.1584 8.06663 14.4667C7.94997 14.6667 7.72497 14.7917 7.49997 14.7917Z" fill="#16A34A"/>
                                        <path d="M12.6752 14.7916C12.4418 14.7916 12.2252 14.6666 12.1168 14.45C11.9585 14.1416 12.0835 13.7666 12.4002 13.6083C12.8502 13.3833 13.2335 13.0416 13.5085 12.625C13.5585 12.55 13.5585 12.45 13.5085 12.3666C13.2335 11.95 12.8502 11.6083 12.4002 11.3833C12.0918 11.225 11.9668 10.85 12.1168 10.5416C12.2752 10.2333 12.6502 10.1083 12.9585 10.2583C13.6002 10.5833 14.1502 11.0666 14.5502 11.6666C14.8835 12.1666 14.8835 12.8083 14.5502 13.3083C14.1502 13.9083 13.6002 14.3916 12.9585 14.7083C12.8585 14.7666 12.7668 14.7916 12.6752 14.7916Z" fill="#16A34A"/>
                                        <path d="M18.3332 6.50835V6.66669L1.6665 6.67502V6.50835C1.6665 3.47502 3.47484 1.66669 6.50817 1.66669H13.4915C16.5248 1.66669 18.3332 3.47502 18.3332 6.50835Z" fill="#16A34A"/>
                                    </svg>

                                    <span className="event_tag_text">
                                        Front-end web development
                                    </span>
                                </div>
                            </div>
                        }
                        eventTitle="Lorem ipsum"
                        eventDescription="Ipsum velit amet amet et dolor laboris non non culpa quis et cillum qui ipsum. Est eu irure reprehenderit eiusmod. In occaecat cupidatat aute anim id. Ea sunt elit consectetur occaecat in aliqua eu non laborum nisi ea dolor ea. Pariatur ut cillum adipisicing quis adipisicing mollit ullamco amet labore in amet commodo. Sit do nisi eu irure dolor voluptate."
                    />
                    <Event
                        eventDate="April 2021"
                        eventTag={
                            <div className="event_tag">
                                <div id="apr_2021">
                                    <svg className="event_tag_icon" width="20" height="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0003 11.6697C10.9027 11.6697 11.6343 10.9221 11.6343 10C11.6343 9.07791 10.9027 8.33038 10.0003 8.33038C9.0978 8.33038 8.36621 9.07791 8.36621 10C8.36621 10.9221 9.0978 11.6697 10.0003 11.6697Z" fill="#007FA3"/>
                                        <path d="M10 13.4207C14.8425 13.4207 18.7682 11.8892 18.7682 10C18.7682 8.1108 14.8425 6.57928 10 6.57928C5.15755 6.57928 1.23193 8.1108 1.23193 10C1.23193 11.8892 5.15755 13.4207 10 13.4207Z" stroke="#007FA3"/>
                                        <path d="M7.10059 11.7104C9.52184 15.9954 12.7827 18.7034 14.384 17.7588C15.9852 16.8142 15.3204 12.5747 12.8992 8.28965C10.4779 4.0046 7.21708 1.29664 5.61583 2.24125C4.01459 3.18586 4.67934 7.42533 7.10059 11.7104Z" stroke="#007FA3"/>
                                        <path d="M7.10054 8.28964C4.67929 12.5747 4.01455 16.8142 5.61579 17.7588C7.21703 18.7034 10.4779 15.9954 12.8991 11.7104C15.3204 7.42532 15.9851 3.18584 14.3839 2.24123C12.7827 1.29663 9.52179 4.00459 7.10054 8.28964Z" stroke="#007FA3"/>
                                    </svg>

                                    <span className="event_tag_text">
                                        Advanced web dev
                                    </span>
                                </div>
                            </div>
                        }
                        eventTitle="Lorem ipsum"
                        eventDescription="Ipsum velit amet amet et dolor laboris non non culpa quis et cillum qui ipsum. Est eu irure reprehenderit eiusmod. In occaecat cupidatat aute anim id. Ea sunt elit consectetur occaecat in aliqua eu non laborum nisi ea dolor ea. Pariatur ut cillum adipisicing quis adipisicing mollit ullamco amet labore in amet commodo. Sit do nisi eu irure dolor voluptate."
                    />
                    <Event
                        eventDate="December 2021"
                        eventTag={
                            <div className="event_tag">
                                <div id="dec_2021">
                                    <svg className="event_tag_icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0002 1.66663H7.22516C5.69183 1.66663 4.4502 2.90829 4.4502 4.44163C4.4502 5.97496 5.69183 7.21663 7.22516 7.21663H10.0002V1.66663Z" fill="#F24E1F"/>
                                        <path opacity="0.4" d="M10.0002 7.22498H7.22516C5.69183 7.22498 4.4502 8.46664 4.4502 9.99998C4.4502 11.5333 5.69183 12.775 7.22516 12.775H10.0002V7.22498Z" fill="#A259FF"/>
                                        <path d="M10.0002 12.7749H7.22516C5.69183 12.7749 4.4502 14.0166 4.4502 15.5499C4.4502 17.0832 5.69183 18.3249 7.22516 18.3249C8.75849 18.3249 10.0002 17.0832 10.0002 15.5499V12.7749Z" fill="#0ACF83"/>
                                        <path opacity="0.4" d="M10 1.66663H12.775C14.3083 1.66663 15.55 2.90829 15.55 4.44163C15.55 5.97496 14.3083 7.21663 12.775 7.21663H10V1.66663Z" fill="#FF7262"/>
                                        <path d="M12.775 7.22498C14.3083 7.22498 15.55 8.46664 15.55 9.99998C15.55 11.5333 14.3083 12.775 12.775 12.775C11.2417 12.775 10 11.5333 10 9.99998C10 8.46664 11.2417 7.22498 12.775 7.22498Z" fill="#1ABCFE"/>
                                    </svg>

                                    <span className="event_tag_text">
                                        Learning design
                                    </span>
                                </div>
                            </div>
                        }
                        eventTitle="Lorem ipsum"
                        eventDescription="Ipsum velit amet amet et dolor laboris non non culpa quis et cillum qui ipsum. Est eu irure reprehenderit eiusmod. In occaecat cupidatat aute anim id. Ea sunt elit consectetur occaecat in aliqua eu non laborum nisi ea dolor ea. Pariatur ut cillum adipisicing quis adipisicing mollit ullamco amet labore in amet commodo. Sit do nisi eu irure dolor voluptate."
                    />
                    <Event
                        eventDate="Now"
                        eventTag={
                            <div className="event_tag">
                                <div id="now">
                                    <svg className="event_tag_icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M13.4915 1.66663H6.50817C3.47484 1.66663 1.6665 3.47496 1.6665 6.50829V13.4833C1.6665 16.525 3.47484 18.3333 6.50817 18.3333H13.4832C16.5165 18.3333 18.3248 16.525 18.3248 13.4916V6.50829C18.3332 3.47496 16.5248 1.66663 13.4915 1.66663Z" fill="#DC2626"/>
                                        <path d="M14.0249 7.84161C13.9665 7.69994 13.8499 7.58328 13.7082 7.52494C13.6415 7.49994 13.5665 7.48328 13.4915 7.48328H11.9415C11.6165 7.48328 11.3582 7.74161 11.3582 8.06661C11.3582 8.39161 11.6165 8.64994 11.9415 8.64994H12.0915L10.3332 10.4083L9.4832 9.14161C9.3832 8.99994 9.2332 8.89994 9.0582 8.88328C8.87487 8.86661 8.71654 8.92494 8.59154 9.04994L6.1082 11.5333C5.8832 11.7583 5.8832 12.1249 6.1082 12.3583C6.22487 12.4749 6.36654 12.5249 6.51654 12.5249C6.66654 12.5249 6.81654 12.4666 6.92487 12.3583L8.9082 10.3749L9.7582 11.6416C9.8582 11.7833 10.0082 11.8833 10.1832 11.8999C10.3665 11.9166 10.5249 11.8583 10.6499 11.7333L12.9165 9.46661V9.61661C12.9165 9.94161 13.1749 10.1999 13.4999 10.1999C13.8249 10.1999 14.0832 9.94161 14.0832 9.61661V8.05828C14.0665 7.98328 14.0582 7.90828 14.0249 7.84161Z" fill="#DC2626"/>
                                    </svg>

                                    <span className="event_tag_text">
                                        Expanding skills
                                    </span>
                                </div>
                            </div>
                        }
                        eventTitle="Lorem ipsum"
                        eventDescription="Ipsum velit amet amet et dolor laboris non non culpa quis et cillum qui ipsum. Est eu irure reprehenderit eiusmod. In occaecat cupidatat aute anim id. Ea sunt elit consectetur occaecat in aliqua eu non laborum nisi ea dolor ea. Pariatur ut cillum adipisicing quis adipisicing mollit ullamco amet labore in amet commodo. Sit do nisi eu irure dolor voluptate."
                    />
                </div>
            </div>

            <div className="to_next_page">
                {/*<ProjectButton/>*/}
            </div>
        </div>
    );
}