import React, { useState } from 'react';

const SellerProductUpload = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        currency: "USD",
        category: "unisex",
        sizes: [],
        colors: [],
        images: []
    });

    const [sizeInput, setSizeInput] = useState("");
    const [colorInput, setColorInput] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCategory = (category) => setFormData(prev => ({ ...prev, category }));

    const addItem = (e, type) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const value = type === 'sizes' ? sizeInput.trim().toUpperCase() : colorInput.trim();
            if (value && !formData[type].includes(value)) {
                setFormData(prev => ({
                    ...prev,
                    [type]: [...prev[type], value]
                }));
                type === 'sizes' ? setSizeInput("") : setColorInput("");
            }
        }
    };

    const removeItem = (item, type) => {
        setFormData(prev => ({
            ...prev,
            [type]: prev[type].filter(i => i !== item)
        }));
    };

    return (
        <div className="min-h-screen flex items-center flex-col bg-[#FCFAF7] font-satoshi text-[#4A3E3E]">
           
            {/* Centering Area for the Upload Card */}
            <main className="flex-1 w-full flex items-center justify-center p-0 md:p-4 lg:p-6 md:h-screen md:overflow-hidden">
                {/* Ultra-Compact Card Layout */}
                <div className="w-full max-w-6xl bg-white border border-[#DCD3C9] shadow-sm flex flex-col md:max-h-[92vh] rounded-sm">
                    
                    {/* Slim Form Header */}
                    <header className="px-6 py-2.5 border-b border-[#DCD3C9] flex justify-between items-center shrink-0">
                        <div>
                            <span className="text-[9px] tracking-[0.3em] text-[#C5A059] uppercase font-bold leading-none font-satoshi">
                                PORTFOLIO ENTRY
                            </span>
                            <h1 className="text-xl text-[#4A3E3E] mt-1 font-medium tracking-tight leading-tight font-gambetta">
                                Create New Listing
                            </h1>
                        </div>
                        <p className="hidden md:block text-muted font-light text-[9px] max-w-[170px] text-right italic leading-tight">
                            Refine your presentation. Your gallery represents the pinnacle of selection.
                        </p>
                    </header>

                    {/* Main Form Area */}
                    <form className="p-4 md:p-6 lg:p-8 md:overflow-y-auto no-scrollbar flex-1" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-6">
                            
                            {/* Left Column: Details & Story */}
                            <div className="space-y-4">
                                <section>
                                    <div className="flex items-center gap-2 mb-3 border-b border-[#DCD3C9] pb-1">
                                        <span className="material-symbols-outlined text-[#C5A059] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>edit_note</span>
                                        <h3 className="text-[9px] tracking-[0.2em] font-bold text-[#4A3E3E] uppercase font-satoshi text-taupe-dark">Identification</h3>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        {/* Product Title */}
                                        <div>
                                            <label className="block text-[9px] tracking-widest text-[#A4907C] uppercase mb-0.5 font-satoshi font-bold" htmlFor="title">
                                                Product Title
                                            </label>
                                            <div className="input-focus-effect flex items-center border-b border-[#DCD3C9] transition-colors duration-300">
                                                <input 
                                                    className="w-full bg-transparent border-0 py-1 px-0 outline-none focus:ring-0 placeholder:text-[#D1C7BD] text-[#4A3E3E] text-sm font-gambetta" 
                                                    id="title" 
                                                    name="title"
                                                    placeholder="e.g. Hand-Burnished Mahogany Credenza" 
                                                    type="text"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div>
                                            <label className="block text-[9px] tracking-widest text-[#A4907C] uppercase mb-0.5 font-satoshi font-bold" htmlFor="description">
                                                Editorial Description
                                            </label>
                                            <div className="input-focus-effect flex items-start border-b border-[#DCD3C9] transition-colors duration-300">
                                                <textarea 
                                                    className="w-full bg-transparent border-0 py-1 px-0 outline-none focus:ring-0 placeholder:text-[#D1C7BD] text-[#4A3E3E] text-[11px] leading-relaxed font-satoshi resize-none" 
                                                    id="description" 
                                                    name="description"
                                                    placeholder="Narrate the history and craftsmanship behind this piece..." 
                                                    rows="2"
                                                    value={formData.description}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Specifications Section */}
                                <section>
                                    <div className="flex items-center gap-2 mb-3 border-b border-[#DCD3C9] pb-1">
                                        <span className="material-symbols-outlined text-[#C5A059] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>straighten</span>
                                        <h3 className="text-[9px] tracking-[0.2em] font-bold text-[#4A3E3E] uppercase font-satoshi text-taupe-dark">Specifications</h3>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        {/* Category Selection */}
                                        <div>
                                            <label className="block text-[9px] tracking-widest text-[#A4907C] uppercase mb-2 font-satoshi font-bold">Category</label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {['male', 'female', 'unisex'].map(cat => (
                                                    <button
                                                        key={cat}
                                                        type="button"
                                                        onClick={() => handleCategory(cat)}
                                                        className={`py-1.5 border text-[8px] font-bold tracking-widest uppercase transition-all duration-300 font-satoshi
                                                            ${formData.category === cat 
                                                                ? "border-[#8D7B68] bg-[#8D7B68] text-white shadow-md shadow-taupe/20" 
                                                                : "border-[#DCD3C9] text-[#A4907C] hover:border-[#8D7B68]"}`}
                                                    >
                                                        {cat}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            {/* Size Input */}
                                            <div>
                                                <label className="block font-label text-[8px] tracking-widest text-secondary uppercase mb-0.5">Sizes</label>
                                                <div className="flex items-center border-b border-stone-200 focus-within:border-primary mb-2 transition-colors duration-300">
                                                    <input 
                                                        className="w-full bg-transparent border-0 py-1 px-0 outline-none focus:ring-0 placeholder:text-stone-300 text-on-surface text-[10px] font-body" 
                                                        placeholder="Press Enter to add size" 
                                                        value={sizeInput}
                                                        onChange={(e) => setSizeInput(e.target.value)}
                                                        onKeyDown={(e) => addItem(e, 'sizes')}
                                                    />
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {formData.sizes.map(size => (
                                                        <span key={size} className="flex items-center gap-1 bg-[#FCFAF7] border border-[#DCD3C9] px-2 py-0.5 text-[8px] font-bold tracking-wider uppercase text-[#4A3E3E] font-satoshi">
                                                            {size}
                                                            <button onClick={() => removeItem(size, 'sizes')} className="material-symbols-outlined text-[12px] hover:text-[#C5A059] transition-colors">close</button>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Color Input */}
                                            <div>
                                                <label className="block text-[9px] tracking-widest text-[#A4907C] uppercase mb-0.5 font-satoshi font-bold">Colors</label>
                                                <div className="input-focus-effect flex items-center border-b border-[#DCD3C9] mb-2 transition-colors duration-300">
                                                    <input 
                                                        className="w-full bg-transparent border-0 py-1 px-0 outline-none focus:ring-0 placeholder:text-[#D1C7BD] text-[#4A3E3E] text-[11px] font-satoshi" 
                                                        placeholder="Press Enter to add color" 
                                                        value={colorInput}
                                                        onChange={(e) => setColorInput(e.target.value)}
                                                        onKeyDown={(e) => addItem(e, 'colors')}
                                                    />
                                                </div>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {formData.colors.map(color => (
                                                        <span key={color} className="flex items-center gap-1 bg-white border border-[#DCD3C9] px-2 py-0.5 text-[8px] font-bold tracking-wider uppercase text-[#4A3E3E] font-satoshi">
                                                            {color}
                                                            <button onClick={() => removeItem(color, 'colors')} className="material-symbols-outlined text-[12px] hover:text-[#C5A059] transition-colors">close</button>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <div className="flex items-center gap-2 mb-3 border-b border-[#DCD3C9] pb-1">
                                        <span className="material-symbols-outlined text-[#C5A059] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                                        <h3 className="text-[9px] tracking-[0.2em] font-bold text-[#4A3E3E] uppercase font-satoshi text-taupe-dark">Valuation</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-[9px] tracking-widest text-[#A4907C] uppercase mb-0.5 font-satoshi font-bold">
                                                Price
                                            </label>
                                            <div className="input-focus-effect flex items-center border-b border-[#DCD3C9] transition-colors duration-300">
                                                <input 
                                                    className="w-full bg-transparent border-0 py-1 px-0 outline-none focus:ring-0 placeholder:text-[#D1C7BD] text-[#4A3E3E] text-lg font-gambetta" 
                                                    placeholder="0.00" 
                                                    name="price"
                                                    step="0.01" 
                                                    type="number"
                                                    value={formData.price}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block font-label text-[8px] tracking-widest text-secondary uppercase mb-0.5">
                                                Currency
                                            </label>
                                            <div className="input-focus-effect flex items-center border-b border-[#DCD3C9] transition-colors duration-300">
                                                <select 
                                                    className="w-full bg-transparent border-0 py-1 px-0 outline-none focus:ring-0 text-[#4A3E3E] text-[11px] font-satoshi appearance-none"
                                                    name="currency"
                                                    value={formData.currency}
                                                    onChange={handleChange}
                                                >
                                                    <option value="USD">USD - US Dollar</option>
                                                    <option value="EUR">EUR - Euro</option>
                                                    <option value="GBP">GBP - British Pound</option>
                                                    <option value="JPY">JPY - Japanese Yen</option>
                                                </select>
                                                <span className="material-symbols-outlined text-[#A4907C] text-[16px]">expand_more</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Right Column: Media Gallery & Actions */}
                            <div className="flex flex-col h-full">
                                <section className="flex-1">
                                    <div className="flex items-center justify-between mb-3 border-b border-[#DCD3C9] pb-1">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[#C5A059] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>collections</span>
                                            <h3 className="text-[9px] tracking-[0.2em] font-bold text-[#4A3E3E] uppercase font-satoshi text-taupe-dark">Media Gallery</h3>
                                        </div>
                                        <span className="text-[8px] font-bold uppercase tracking-widest text-[#A4907C] font-satoshi">0 / 3 Slots</span>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6">
                                        <div className="col-span-3 sm:col-span-2 aspect-video bg-[#FCFAF7] border border-dashed border-[#DCD3C9] flex flex-col items-center justify-center group hover:border-[#C5A059] transition-colors cursor-pointer rounded-sm">
                                            <span className="material-symbols-outlined text-[#D1C7BD] text-2xl group-hover:text-[#C5A059] transition-colors">add_photo_alternate</span>
                                            <p className="font-bold uppercase tracking-widest text-[8px] text-[#A4907C] mt-2 font-satoshi">Feature Image</p>
                                        </div>
                                        <div className="col-span-3 sm:col-span-1 flex sm:flex-col gap-2 md:gap-3 h-full">
                                            <div className="aspect-square sm:aspect-auto bg-[#FCFAF7] border border-dashed border-[#DCD3C9] flex items-center justify-center group hover:border-[#C5A059] transition-colors cursor-pointer flex-1 rounded-sm min-h-[80px]">
                                                <span className="material-symbols-outlined text-[#D1C7BD] group-hover:text-[#C5A059] text-[16px]">add</span>
                                            </div>
                                            <div className="aspect-square sm:aspect-auto bg-[#FCFAF7] border border-dashed border-[#DCD3C9] flex items-center justify-center group hover:border-[#C5A059] transition-colors cursor-pointer flex-1 rounded-sm min-h-[80px]">
                                                <span className="material-symbols-outlined text-[#D1C7BD] group-hover:text-[#C5A059] text-[16px]">add</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="pt-4 flex flex-col gap-2 shrink-0">
                                    <button className="btn-lift w-full bg-[#4A3E3E] text-white py-2.5 font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-black active:scale-[0.99] transition-all duration-300 cursor-pointer shadow-lg font-satoshi">
                                        Publish to Gallery
                                    </button>
                                    <button className="w-full group py-2 font-bold text-[9px] tracking-[0.2em] uppercase text-[#4A3E3E] hover:text-[#C5A059] transition-all flex items-center justify-center gap-2 font-satoshi">
                                        <span className="relative">
                                            Save as Draft
                                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5A059] group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* Ultra-Slim Footer */}
                    <footer className="bg-[#FCFAF7] py-3 px-6 border-t border-[#DCD3C9] flex items-center shrink-0">
                        <span className="material-symbols-outlined text-[#C5A059] text-[14px] mr-2">info</span>
                        <p className="text-[8px] text-[#A4907C] font-satoshi tracking-[0.05em] uppercase font-bold">
                            Detail grain and origin to increase collector confidence.
                        </p>
                    </footer>
                </div>
            </main>
        </div>
    );
};

export default SellerProductUpload;
