import { Bell, Settings, User } from 'lucide-react';
import { NavLink } from 'react-router';
import ItemTable from './ItemsTable';
import Additem from './Additem';
import { useState } from 'react';

export default function MenuManager({item, Setitem, edititem, setEdititem}) {
    return (
        <main className='w-full'>
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-bold text-gray-900">Menu Manager</h1>
                        <span className="text-sm text-gray-500">Manage your restaurant menus</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Bell size={20} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Settings size={20} />
                        </button>
                        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                            <User size={18} className="text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">Restaurant Name</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 px-6 py-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Welcome to Your Menu Manager
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Create, organize, and manage all your restaurant menus in one place. 
                        From breakfast specials to dinner favorites, keep your offerings fresh and organized.
                    </p>
                    
                    <div className="flex items-center justify-center">
                        <NavLink to={"/merchant/addmenu"} className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-sm transition-colors">
                            Add New Menu
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className=''>
                <ItemTable item={item} Setitem={Setitem} edititem={edititem} setEdititem={setEdititem}/>
            </div>
        </main>
    );
}