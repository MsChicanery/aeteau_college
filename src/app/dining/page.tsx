<<<<<<< HEAD
'use client'
=======
import React from "react";
import Link from "next/link";
import { meals } from "@/data/meals";
>>>>>>> b6740baa4ee8a33042ea69128202d23b021349d0

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function DiningPage() {
  const [selectedMeal, setSelectedMeal] = useState('breakfast')

  const mealTimes = [
    { id: 'breakfast', name: 'Breakfast', hours: '7:00 AM - 10:00 AM' },
    { id: 'lunch', name: 'Lunch', hours: '11:00 AM - 2:30 PM' },
    { id: 'dinner', name: 'Dinner', hours: '5:00 PM - 8:30 PM' },
    { id: 'latenight', name: 'Late Night', hours: '9:00 PM - 11:30 PM' }
  ]

  const diningLocations = [
    {
      name: 'Main Dining Hall',
      description: 'All-you-can-eat dining with diverse meal stations and dietary options',
      image: '/images/main-hall.jpg',
      features: ['Meal Swipes', 'Dining Dollars', 'Allergen-Free Zone']
    },
    {
      name: 'Student Union Food Court',
      description: 'Quick service restaurants and popular chain outlets',
      image: '/images/food-court.jpg',
      features: ['Dining Dollars', 'Credit/Debit', 'Mobile Ordering']
    },
    {
      name: 'Library Café',
      description: 'Coffee, pastries, and grab-and-go meals for busy students',
      image: '/images/cafe.jpg',
      features: ['Dining Dollars', 'Credit/Debit', '24/7 During Finals']
    },
    {
      name: 'Campus Market',
      description: 'Convenience store with snacks, drinks, and essential items',
      image: '/images/market.jpg',
      features: ['Dining Dollars', 'Credit/Debit', 'Meal Exchange']
    }
  ]

  const mealPlans = [
    {
      name: 'Ultimate',
      swipes: 'Unlimited',
      diningDollars: '$300',
      price: '$2,200/semester'
    },
    {
      name: 'Standard',
      swipes: '14 meals/week',
      diningDollars: '$200',
      price: '$1,800/semester'
    },
    {
      name: 'Basic',
      swipes: '10 meals/week',
      diningDollars: '$150',
      price: '$1,500/semester'
    }
  ]

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Campus Dining</h1>
        
        {/* Meal Times Section */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Dining Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {mealTimes.map((meal) => (
              <div
                key={meal.id}
                className={`p-6 rounded-lg cursor-pointer transition-colors ${
                  selectedMeal === meal.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedMeal(meal.id)}
              >
                <h3 className="text-xl font-medium">{meal.name}</h3>
                <p className="mt-2">{meal.hours}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meal Plans Section */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Meal Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mealPlans.map((plan) => (
              <div key={plan.name} className="border rounded-lg p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ {plan.swipes}</li>
                  <li>✓ {plan.diningDollars} Dining Dollars</li>
                  <li className="font-semibold text-blue-600">{plan.price}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Dining Locations */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Dining Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diningLocations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{location.name}</h3>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature) => (
                      <span key={feature} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </main>
  )
}