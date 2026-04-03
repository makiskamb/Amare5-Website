import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { VillasPage } from "./pages/VillasPage";
import { VillaDetailPage } from "./pages/VillaDetailPage";
import { DiningPage } from "./pages/DiningPage";
import { ExperiencesPage } from "./pages/ExperiencesPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { BookPage } from "./pages/BookPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";
import { TermsPage } from "./pages/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "villas", Component: VillasPage },
      { path: "villas/:slug", Component: VillaDetailPage },
      { path: "dining", Component: DiningPage },
      { path: "experiences", Component: ExperiencesPage },
      { path: "gallery", Component: GalleryPage },
      { path: "contact", Component: ContactPage },
      { path: "book", Component: BookPage },
      { path: "privacy", Component: PrivacyPolicyPage },
      { path: "cookies", Component: CookiePolicyPage },
      { path: "terms", Component: TermsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
