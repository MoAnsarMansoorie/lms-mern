import { createContext, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children}) => {
    const currency = import.meta.env.VITE_CURRENCY;

    const [allCourses, setAllCourses] = useState([]);

    const navigate = useNavigate();

    // fetch all courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses);
    }

    // fetch all courses when the component mounts
    useState(() => {
        fetchAllCourses();
    }, []);

    // function to calculate the average rating of a course
    const calculateAverageRating = (course) => {
        const totalRating = course.ratings.reduce((acc, rating) => acc + rating, 0);
        return (totalRating / course.ratings.length).toFixed(1);
    }

    const value = {
        currency,
        allCourses,
        navigate
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
} 