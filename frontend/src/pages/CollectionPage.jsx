import React, { useState, useEffect, useRef } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (e) => {
        // Close sidebar if clicked outside
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        //Add event listener for clicks
        document.addEventListener("mousedown", handleClickOutside);
        // clean event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                {
                    _id: 6,
                    name: "Product 1",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=6" }]
                },
                {
                    _id: 7,
                    name: "Product 2",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=7" }]
                },
                {
                    _id: 8,
                    name: "Product 3",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=8" }]
                },
                {
                    _id: 9,
                    name: "Product 4",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=9" }]
                },
                {
                    _id: 10,
                    name: "Product 10",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=10" }]
                },
                {
                    _id: 11,
                    name: "Product 11",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=11" }]
                },
                {
                    _id: 12,
                    name: "Product 12",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=12" }]
                },
                {
                    _id: 13,
                    name: "Product 13",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=13" }]
                }
            ];
            setProducts(fetchedProducts);
        }, 1000);
    }, []);

    return (
        <div className='flex flex-col lg:flex-row'>
            {/* Mobile filter button*/}
            <button onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center items-center">
                <FaFilter className='mr-2'/> Filters
            </button>

            {/*Filter Sidebar */}
            <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
                <FilterSidebar />
            </div>
            <div className="flex-grow p-4">
                <h2 className='text-2xl uppercase mb-4'>All Collection</h2>

                {/* Sort Options */}
                <SortOptions />

                {/*Product grid */}
                <ProductGrid products={products} />
            </div>
        </div>
    );
};

export default CollectionPage;