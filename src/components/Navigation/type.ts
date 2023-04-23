import { ROUTES } from "../../routes/routes";

interface Menu {
    label: string;
    url: string;
    icon?: React.ElementType;
}

export const desktopMenuItems: Menu[] = [
    { label: "Home", url: ROUTES.home },
    { label: "Technology", url: ROUTES.technology },
    { label: "Design", url: ROUTES.design },
    { label: "Culture", url: ROUTES.culture },
    { label: "Business", url: ROUTES.business },
    { label: "Politics", url: ROUTES.politics },
    { label: "Opinion", url: ROUTES.opinion },
    { label: "Science", url: ROUTES.science },
    { label: "Health", url: ROUTES.health },
    { label: "Style", url: ROUTES.style },
    { label: "Travel", url: ROUTES.travel },
];
