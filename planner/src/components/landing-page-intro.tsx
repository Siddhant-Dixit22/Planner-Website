"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export const LandingPageIntro = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <section className="text-center max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-6">Plan Your Day with Ease</h1>
          <p className="text-xl text-gray-600 mb-8">
            Simple, intuitive planning tools to help you stay organized and productive
          </p>
          <Link href="/sign-up">
            <Button>
              Get Started
            </Button>
          </Link>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-4 pb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Task Management</h2>
            <p className="text-gray-600">Organize your tasks efficiently</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">A.I. Integration</h2>
            <p className="text-gray-600">Have the help of A.I. to manage your time.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Progress Tracking</h2>
            <p className="text-gray-600">Monitor your productivity</p>
          </div>
        </section>
      </main>
    );
};
