import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Catalogue from "./pages/Catalogue.tsx";
import CourseDetail from "./pages/CourseDetail.tsx";
import Enroll from "./pages/Enroll.tsx";
import MyLearning from "./pages/MyLearning.tsx";
import Faculty from "./pages/Faculty.tsx";
import AboutUdst from "./pages/AboutUdst.tsx";
import Auth from "./pages/Auth.tsx";
import NotFound from "./pages/NotFound.tsx";
import HashScroll from "./components/HashScroll";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HashScroll />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Catalogue />} />
          <Route path="/courses/:code" element={<CourseDetail />} />
          <Route path="/enroll/:code" element={<Enroll />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/about-udst" element={<AboutUdst />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
