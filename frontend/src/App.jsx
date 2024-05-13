import { BrowserRouter, Routes, Route, Outlet, useParams, Navigate } from "react-router-dom"
import Home from "./page/Home";
import Contact from "./page/Contact";
import About from "./page/About";
import AppLayout from "./layout/AppLayout";
import PageNotFound from "./page/PageNotFound";
import { useState } from "react";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import LoginForm from "./auth/LoginForm";



function Posts() {
    return (
        <>
            <h1>Posts</h1>
            <Outlet />
        </>

    )
}

function Post() {
    let params = useParams();

    return (
        <>
            <h1>Post: {params.postId}</h1>
        </>
    )
}


function App() {
    const [isAuthencated, setIsAuthencated] = useState(false)
    const [user, setUser] = useState({toke: "", user: { username: "", roles: [] }})
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={
                        <ProtectedRoutes isAuthencated={isAuthencated}>
                            <AppLayout setIsAuthencated={setIsAuthencated} roles={user.user.roles} />
                        </ProtectedRoutes>}>
                        <Route index element={<Navigate to="home" />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="posts" element={<Posts />}>
                            <Route index element={<h1>New Posts</h1>} />
                            <Route path=":postId" element={<Post />} />
                        </Route>
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                    <Route path="login" element={<LoginForm setIsAuthencated={setIsAuthencated} setUser={setUser} />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}




export default App
