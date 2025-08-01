import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        category: "",
        type: "",
        color: "",
        size: [],
        club: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    });

    const [priceRange, setPriceRange] = useState([0, 100]);

    const categories = ["Products", "Shirts"];

    const type = ["Short-sleeve", "Long-sleeve"];

    const colors = [
        "Red",
        "Blue",
        "Green",
        "Black",
        "Yellow",
        "Gray",
        "White",
        "Pink",
        "Beige",
        "Navy",
    ];

    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

    const clubs = [
        "Liverpool",
        "Real Madrid",
        "Barcelona",
        "PSG",
        "Chelsea",
        "Bayern",
        "Juventus",
        "AC Milan",
    ];

    const brands = [
        "Adidas",
        "Nike",
        "Puma",
        "Kappa"
    ];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);

        setFilters({
            category: params.category || "",
            type: params.type || "",
            color: params.color || "",
            size: params.size? params.size.split(",") : [],
            club: params.club? params.club.split(",") : [],
            brand: params.brand? params.brand.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100,
        });
        setPriceRange([0, params.maxPrice || 100]);
    }, [searchParams]);

    const handleFilterChange = (e) => {
        const {name, value, checked, type} = e.target;
        let newFilters = {...filters};
        if (type === "checkbox") {
            if(checked) {
                newFilters[name] = [...(newFilters[name] || []), value];
            } else {
                newFilters[name] = newFilters[name].filter((item) => item !== value)
            }
        } else {
            newFilters[name] = value;
        }
        setFilters(newFilters);
        updateURLParams(newFilters);
    };

    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams();

        Object.keys(newFilters).forEach((key) => {
            if(Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
                params.append(key, newFilters[key].join(","));
            } else if (newFilters[key]) {
                params.append(key, newFilters[key]);
            }
        });
        setSearchParams(params);
        navigate(`?${params.toString()}`);
    };

    const handlePriceChange = (e) => {
        const newPrice = e.target.value;
        setPriceRange([0, newPrice])
        const newFilters = {... filters, minPrice: 0, maxPrice: newPrice};
        setFilters(filters);
        updateURLParams(newFilters);
    };


  return (
    <div className='p-4'>
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category FIlter*/}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
            <div key={category} className="flex items-center mb-1">
                <input  
                type='radio' 
                name='category' 
                className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
                value={category}
                onChange={handleFilterChange}
                checked={filters.category === category}
                />
                <span className="text-gray-700">{category}</span>
            </div>
        ))}
      </div>

      {/* Type FIlter*/}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Type</label>
        {type.map((type) => (
            <div key={type} className="flex items-center mb-1">
                <input  
                type='radio' 
                name='type' 
                className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
                value={type}
                onChange={handleFilterChange}
                checked={filters.type === type}
                />
                <span className="text-gray-700">{type}</span>
            </div>
        ))}
      </div>

      {/* Color section*/}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
                <button 
                    key={color} 
                    name='color' 
                    className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.color === color ? "ring-2 ring-blue-500" : ""}`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    value={color}
                    onClick={handleFilterChange}
                >
                </button>
            ))}
        </div>
      </div>

        {/*Size filter */}
        <div className="mb-6">
            <label className='block text-gray-600 font-medium mb-2'>Size</label>
            {sizes.map((size) => (
                <div key={size} className="flex items-center mb-1">
                    <input 
                    type='checkbox' 
                    name='size' 
                    className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
                    value={size}
                    onChange={handleFilterChange}
                    checked={filters.size.includes(size)} 
                    />
                    <span className="text-gray-700">{size}</span>
                </div>
            ))}
        </div>


        {/*Club Filter */}
        <div className="mb-6">
            <label className='block text-gray-600 font-medium mb-2'>Club</label>
            {clubs.map((club) => (
                <div key={club} className="flex items-center mb-1">
                    <input 
                    type='checkbox' 
                    name='club' 
                    className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
                    value={club}
                    onChange={handleFilterChange}
                    checked={filters.club.includes(club)}  
                    />
                    <span className="text-gray-700">{club}</span>
                </div>
            ))}
        </div>


        {/*Brand Filter */}
        <div className="mb-6">
            <label className='block text-gray-600 font-medium mb-2'>Brand</label>
            {brands.map((brand) => (
                <div key={brand} className="flex items-center mb-1">
                    <input 
                    type='checkbox' 
                    name='size' 
                    className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
                    value={brand}
                    onChange={handleFilterChange} 
                    />
                    <span className="text-gray-700">{brand}</span>
                    checked={filters.brand.includes(brand)} 
                </div>
            ))}
        </div>

        {/*Price range filter*/}
        <div className="mb-8">
            <label className='block text-gray-600 font-medium mb-2'>Price Range</label>
            <input 
                type='range' 
                name='priceRange' 
                min={0} max={100} 
                className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'
                value={priceRange[1]}
                onChange={handlePriceChange}
            />
            <div className="flex justify-between text-gray-600 mt-2">
                <span>€0</span>
                <span>€{priceRange[1]}</span>
            </div>
        </div>              
    </div>
  );
};

export default FilterSidebar
