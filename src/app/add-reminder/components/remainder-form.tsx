"use client";
import React, { useState } from "react";
import { Calendar, ChevronDown, ArrowLeft } from "lucide-react";

interface Pet {
  id: string;
  name: string;
  avatar: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

const pets: Pet[] = [
  { id: "1", name: "Browny", avatar: "🐕" },
  { id: "2", name: "Whiskers", avatar: "🐱" },
  { id: "3", name: "Buddy", avatar: "🐶" },
];

const categories: Category[] = [
  { id: "1", name: "General", icon: "📋", color: "bg-blue-500" },
  { id: "2", name: "Feeding", icon: "🍽️", color: "bg-green-500" },
  { id: "3", name: "Medicine", icon: "💊", color: "bg-red-500" },
  { id: "4", name: "Exercise", icon: "🏃", color: "bg-orange-500" },
];

const PetReminderForm = () => {
  const [selectedPet, setSelectedPet] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [reminderText, setReminderText] = useState("");
  const [notes, setNotes] = useState("");
  const [showNotes, setShowNotes] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showEndDate, setShowEndDate] = useState(false);

  const handleSave = () => {
    console.log("Saving reminder:", {
      pet: selectedPet,
      category: selectedCategory,
      text: reminderText,
      notes,
      startDate,
      endDate,
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, ".");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200/30 to-indigo-300/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/50 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-5 flex items-center justify-between">
          <button
            className="p-2 hover:bg-gray-100/80 rounded-xl transition-all duration-200 border-none bg-transparent cursor-pointer"
            onClick={() => (window.location.href = "/dashboard")}
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Add Reminder
          </h1>
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium border-none cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto p-6 space-y-8 relative z-10">
        {/* Pet and Category Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
              Select Pet
            </label>
            <div className="relative">
              <select
                value={selectedPet}
                onChange={(e) => setSelectedPet(e.target.value)}
                className="w-full bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500/20 h-14 px-4 text-gray-700 font-medium appearance-none cursor-pointer"
              >
                <option value="">Browny</option>
                {pets.map((pet) => (
                  <option key={pet.id} value={pet.id}>
                    {pet.avatar} {pet.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></span>
              Select Category
            </label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 focus:ring-2 focus:ring-green-500/20 h-14 px-4 text-gray-700 font-medium appearance-none cursor-pointer"
              >
                <option value="">General</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Reminder Info Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-4 flex items-center gap-3">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full"></div>
            <span className="font-bold text-lg">Reminder Info</span>
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 block">
                Set a reminder for...
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type here..."
                  value={reminderText}
                  onChange={(e) => setReminderText(e.target.value)}
                  maxLength={100}
                  className="w-full bg-gray-50/80 border border-gray-200/60 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-300 h-12 px-4 text-gray-700 font-medium"
                />
                <div className="text-xs text-gray-400 mt-2 text-right font-medium">
                  {reminderText.length}/100
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-700">
                  Add Notes (Optional)
                </label>
                <button
                  onClick={() => setShowNotes(!showNotes)}
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold hover:bg-emerald-50 rounded-xl px-4 py-2 transition-all duration-200 border-none bg-transparent cursor-pointer"
                >
                  {showNotes ? "Hide" : "Add"}
                </button>
              </div>
              {showNotes && (
                <div className="transform transition-all duration-300 ease-out">
                  <textarea
                    placeholder="Add additional notes..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    className="w-full bg-gray-50/80 border border-gray-200/60 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-300 resize-none p-4 text-gray-700 font-medium"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Reminder Settings Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-indigo-500 rounded-full"></div>
              <span className="font-bold text-lg">Reminder Settings</span>
            </div>
            <ChevronDown className="h-5 w-5 opacity-70" />
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 block">
                Start Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-gray-50/80 border border-gray-200/60 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 focus:ring-2 focus:ring-blue-500/20 h-14 px-4 text-gray-700 font-medium"
                />
                <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setShowEndDate(!showEndDate)}
                className="text-gray-500 hover:text-gray-700 text-sm font-semibold hover:bg-transparent transition-colors duration-200 border-none bg-transparent cursor-pointer p-0"
              >
                + Add End Date
              </button>
              {showEndDate && (
                <div className="transform transition-all duration-300 ease-out">
                  <div className="relative">
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full bg-gray-50/80 border border-gray-200/60 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 focus:ring-2 focus:ring-purple-500/20 h-14 px-4 text-gray-700 font-medium"
                    />
                    <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetReminderForm;
