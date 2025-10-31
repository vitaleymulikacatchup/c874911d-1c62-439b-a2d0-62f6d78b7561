"use client"

import { Building2, Briefcase, Calendar, Crown, Gift, Heart, HelpCircle, MapPin, MessageSquare, Sparkles, Star, Trophy, Users } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "product" },
            { name: "Amenities", id: "feature" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
          button={{ text: "Book Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury & Comfort"
          description="Welcome to Grand Vista Hotel, where exceptional service meets elegant accommodations. Book your perfect stay with us."
          tag="5-Star Hotel"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "View Rooms", href: "product" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Vista Hotel luxury lobby"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Grand Vista Hotel"
          description="Discover our commitment to providing exceptional hospitality and luxury accommodations in the heart of the city."
          tag="Our Story"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Prime Location",
              description: "Located in the city center with easy access to major attractions and business districts",
              icon: MapPin
            },
            {
              title: "Exceptional Service",
              description: "24/7 concierge service and personalized attention to every guest's needs",
              icon: Users
            },
            {
              title: "Luxury Amenities",
              description: "World-class spa, fitness center, fine dining, and premium facilities",
              icon: Crown
            }
          ]}
          imageSrc="https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel concierge providing exceptional service"
          imagePosition="left"
          buttons={[{ text: "Learn More", href: "feature" }]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Hotel Amenities"
          description="Enjoy our world-class amenities designed for comfort, relaxation, and convenience"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate at our full-service spa with massage therapy, sauna, and wellness treatments",
              imageSrc: "https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel spa treatment room"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor gourmet cuisine at our award-winning restaurant with world-class chefs",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel fine dining restaurant"
            },
            {
              title: "Fitness Center",
              description: "Stay active with our state-of-the-art fitness center and personal training services",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel fitness center"
            },
            {
              title: "Rooftop Pool",
              description: "Relax by our stunning rooftop pool with panoramic city views and poolside service",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel rooftop swimming pool"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our selection of elegantly appointed rooms and suites"
          tag="Room Selection"
          products={[
            {
              id: "1",
              brand: "Grand Vista",
              name: "Deluxe King Room",
              price: "$299/night",
              rating: 5,
              reviewCount: "2.4k",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe king room with city view"
            },
            {
              id: "2",
              brand: "Grand Vista",
              name: "Executive Suite",
              price: "$499/night",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive suite with living area"
            },
            {
              id: "3",
              brand: "Grand Vista",
              name: "Presidential Suite",
              price: "$899/night",
              rating: 5,
              reviewCount: "920",
              imageSrc: "https://images.pexels.com/photos/34516518/pexels-photo-34516518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential suite luxury interior"
            }
          ]
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Booking Packages"
          description="Select the perfect package for your stay with exclusive benefits and savings"
          tag="Special Offers"
          tagIcon={Gift}
          plans={[
            {
              id: "weekend",
              badge: "Weekend Special",
              badgeIcon: Calendar,
              price: "$399/night",
              subtitle: "Perfect for weekend getaways",
              buttons: [
                { text: "Book Weekend", href: "contact" },
                { text: "Learn More", href: "feature" }
              ],
              features: [
                "Deluxe room accommodation",
                "Complimentary breakfast for two",
                "Late checkout until 2 PM",
                "Welcome champagne",
                "Spa discount 20%"
              ]
            },
            {
              id: "business",
              badge: "Business Package",
              badgeIcon: Briefcase,
              price: "$459/night",
              subtitle: "Ideal for business travelers",
              buttons: [
                { text: "Book Business", href: "contact" },
                { text: "Contact Sales", href: "contact" }
              ],
              features: [
                "Executive suite upgrade",
                "High-speed WiFi",
                "Meeting room access",
                "Airport transportation",
                "Business center privileges",
                "Express laundry service"
              ]
            },
            {
              id: "luxury",
              badge: "Luxury Experience",
              badgeIcon: Crown,
              price: "$699/night",
              subtitle: "Ultimate luxury and comfort",
              buttons: [
                { text: "Book Luxury", href: "contact" },
                { text: "VIP Concierge", href: "contact" }
              ],
              features: [
                "Presidential suite",
                "Personal butler service",
                "Private dining experience",
                "Spa treatments included",
                "Helicopter transfers",
                "24/7 concierge"
              ]
            }
          ]
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Hotel Excellence"
          description="Our commitment to exceptional service reflected in our achievements"
          tag="Awards"
          tagIcon={Trophy}
          metrics={[
            {
              id: "1",
              value: "25",
              title: "years",
              description: "Serving guests with excellence and luxury hospitality",
              icon: Calendar
            },
            {
              id: "2",
              value: "50K+",
              title: "guests",
              description: "Happy guests who experienced our exceptional service",
              icon: Users
            },
            {
              id: "3",
              value: "98%",
              title: "satisfaction",
              description: "Guest satisfaction rating based on reviews and feedback",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Guest Reviews"
          description="What our valued guests say about their experience at Grand Vista Hotel"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              company: "Tech Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Blogger",
              company: "Wanderlust Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8790804/pexels-photo-8790804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Event Planner",
              company: "Elite Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7216765/pexels-photo-7216765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Investment Banker",
              company: "Global Finance",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Lisa & Mark Thompson",
              role: "Celebrating Anniversary",
              company: "Special Occasion",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1066801/pexels-photo-1066801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa and Mark Thompson"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="Corporate partners and guests who choose Grand Vista Hotel for their business needs"
          tag="Corporate Partners"
          tagIcon={Building2}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={30}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about your stay at Grand Vista Hotel"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service. Please contact our concierge team 24 hours in advance to arrange your pickup."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature a fine dining restaurant, casual café, rooftop bar, and 24-hour room service. Our restaurant serves breakfast, lunch, and dinner with international cuisine."
            },
            {
              id: "4",
              title: "Is parking available at the hotel?",
              content: "Yes, we offer both self-parking and valet parking services. Valet parking is $35 per night, and self-parking is $25 per night."
            },
            {
              id: "5",
              title: "Do you allow pets?",
              content: "We are a pet-friendly hotel! We welcome dogs and cats with a one-time pet fee of $75. Please inform us of your pet when making your reservation."
            },
            {
              id: "6",
              title: "What amenities are included with my stay?",
              content: "All rooms include high-speed WiFi, fitness center access, business center use, and access to our rooftop pool. Spa and restaurant services are available at additional cost."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Book Now"
          tagIcon={Calendar}
          title="Ready for Your Perfect Stay?"
          description="Contact us to make a reservation or get more information about our luxury accommodations and exceptional service."
          inputPlaceholder="Your email address"
          buttonText="Get Booking Info"
          termsText="By submitting your email, you agree to receive booking information and special offers from Grand Vista Hotel."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "product" },
                { label: "Amenities", href: "feature" },
                { label: "Dining", href: "feature" },
                { label: "Spa & Wellness", href: "feature" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "contact" },
                { label: "Business Center", href: "contact" },
                { label: "Event Planning", href: "contact" },
                { label: "Airport Transfer", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Make Reservation", href: "contact" },
                { label: "Guest Services", href: "contact" },
                { label: "Reviews", href: "testimonial" },
                { label: "Special Offers", href: "pricing" }
              ]
            }
          ]}
          copyrightText="© 2025 Grand Vista Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}