"use client";
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  ChevronDown,
  ArrowLeft,
  Save,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

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

const frequencies = [
  { value: "once", label: "Once" },
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
];

const PetReminderForm = () => {
  const [selectedPet, setSelectedPet] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [reminderText, setReminderText] = useState("");
  const [notes, setNotes] = useState("");
  const [showNotes, setShowNotes] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [reminderTime, setReminderTime] = useState("12:06");
  const [frequency, setFrequency] = useState("daily");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  const handleSave = () => {
    console.log("Saving reminder:", {
      pet: selectedPet,
      category: selectedCategory,
      text: reminderText,
      notes,
      startDate,
      endDate,
      time: reminderTime,
      frequency,
    });
    // Add your save logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={() => (window.location.href = "/dashboard")}
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Button>
          <h1 className="text-lg font-semibold text-gray-900">Add Reminder</h1>
          <Button
            onClick={handleSave}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Save
          </Button>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Pet and Category Selection */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Select Pet
            </label>
            <Select value={selectedPet} onValueChange={setSelectedPet}>
              <SelectTrigger className="w-full bg-white border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <SelectValue placeholder="Browny" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200 rounded-xl shadow-lg">
                {pets.map((pet) => (
                  <SelectItem
                    key={pet.id}
                    value={pet.id}
                    className="hover:bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{pet.avatar}</span>
                      <span>{pet.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Select Category
            </label>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full bg-white border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  {selectedCategory && (
                    <div
                      className={cn(
                        "w-3 h-3 rounded-full",
                        categories.find((c) => c.id === selectedCategory)?.color
                      )}
                    />
                  )}
                  <SelectValue placeholder="General" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200 rounded-xl shadow-lg">
                {categories.map((category) => (
                  <SelectItem
                    key={category.id}
                    value={category.id}
                    className="hover:bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Reminder Info */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium mb-4 -mt-4 -mx-4">
            Reminder Info
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Set a reminder for...
              </label>
              <Input
                placeholder="Type here..."
                value={reminderText}
                onChange={(e) => setReminderText(e.target.value)}
                className="bg-gray-50 border-gray-200 rounded-xl focus:bg-white transition-colors"
              />
              <div className="text-xs text-gray-400 mt-1 text-right">
                {reminderText.length}/100
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Add Notes (Optional)
                </label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowNotes(!showNotes)}
                  className="text-emerald-500 hover:text-emerald-600 text-sm font-medium"
                >
                  {showNotes ? "Hide" : "Add"}
                </Button>
              </div>
              {showNotes && (
                <Textarea
                  placeholder="Add additional notes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="bg-gray-50 border-gray-200 rounded-xl focus:bg-white transition-colors animate-fade-in"
                  rows={3}
                />
              )}
            </div>
          </div>
        </div>

        {/* Reminder Settings */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium mb-4 -mt-4 -mx-4 flex items-center justify-between">
            Reminder Settings
            <ChevronDown className="h-4 w-4" />
          </div>

          <div className="space-y-4">
            {/* Start Date */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Start Date
              </label>
              <Popover open={showCalendar} onOpenChange={setShowCalendar}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between bg-gray-50 border-gray-200 rounded-xl hover:bg-white transition-colors"
                  >
                    <span className="text-gray-700">
                      {startDate
                        ? format(startDate, "dd.MM.yyyy")
                        : "23.02.205"}
                    </span>
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white border-gray-200 rounded-xl shadow-lg">
                  <CalendarComponent
                    mode="single"
                    selected={startDate}
                    onSelect={(date) => {
                      setStartDate(date);
                      setShowCalendar(false);
                    }}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Add End Date */}
            <div>
              <Button
                variant="ghost"
                onClick={() => setShowEndCalendar(true)}
                className="text-gray-400 hover:text-gray-600 text-sm font-medium p-0 h-auto"
              >
                + Add End Date
              </Button>
              {showEndCalendar && (
                <Popover
                  open={showEndCalendar}
                  onOpenChange={setShowEndCalendar}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between bg-gray-50 border-gray-200 rounded-xl hover:bg-white transition-colors mt-2"
                    >
                      <span className="text-gray-700">
                        {endDate
                          ? format(endDate, "dd.MM.yyyy")
                          : "Select end date"}
                      </span>
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white border-gray-200 rounded-xl shadow-lg">
                    <CalendarComponent
                      mode="single"
                      selected={endDate}
                      onSelect={(date) => {
                        setEndDate(date);
                        setShowEndCalendar(false);
                      }}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              )}
            </div>

            {/* Reminder Time */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Reminder Time
              </label>
              <div className="relative">
                <Input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  className="bg-gray-50 border-gray-200 rounded-xl focus:bg-white transition-colors pr-10"
                />
                <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Reminder Frequency */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Reminder Frequency
              </label>
              <p className="text-xs text-gray-500 mb-2">
                How often should this reminder repeat?
              </p>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-xl hover:bg-white transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 rounded-xl shadow-lg">
                  {frequencies.map((freq) => (
                    <SelectItem
                      key={freq.value}
                      value={freq.value}
                      className="hover:bg-gray-50 rounded-lg"
                    >
                      {freq.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Save Button - Mobile */}
        <div className="md:hidden">
          <Button
            onClick={handleSave}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-medium transition-colors shadow-lg"
          >
            <Save className="h-5 w-5 mr-2" />
            Save Reminder
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PetReminderForm;
