import { createContext, useState } from "react";
import BlogsData from '../utils/BlogsData.json'

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
    const [activeCategory, _setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;


    const setActiveCategory = (category) => {
        _setActiveCategory(category);
        setCurrentPage(1);
    };

    const CategoriesArray = BlogsData.map(item => item.category);
    const uniqueCategories = ["All", ...new Set(CategoriesArray)];
    
    const filteredCategory = activeCategory === "All"
        ? BlogsData
        : BlogsData.filter((item) => item.category === activeCategory);
    
    const totalPages = Math.ceil(filteredCategory.length / itemsPerPage);
    
    const currentBlogs = filteredCategory.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );
    
    const ContextValue = {
        uniqueCategories, 
        setActiveCategory,
        activeCategory, 
        filteredCategory,
        currentBlogs,
        totalPages,
        currentPage,
        setCurrentPage,
        itemsPerPage
    };
    
    return (
        <BlogContext.Provider value={ContextValue}>
            {children}
        </BlogContext.Provider>
    );
};