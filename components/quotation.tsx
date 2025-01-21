"use client";
import React, { useState, useRef } from "react";
import {
  Code2,
  Smartphone,
  ShoppingBag,
  Check,
  Plus,
  Minus,
  Download,
} from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type Feature = {
  name: string;
  price: number;
  description?: string;
};

type ServiceFeatures = {
  [key: string]: {
    packages: {
      [key: string]: {
        price: string;
        features: string[];
      };
    };
    customFeatures: Feature[];
  };
};

export const Quotation = () => {
  const [selectedService, setSelectedService] = useState<keyof ServiceFeatures | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedCustomFeatures, setSelectedCustomFeatures] = useState<Feature[]>([]);
  const [customNotes, setCustomNotes] = useState("");
  const quotationRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Web Development",
      icon: <Code2 size={48} className="text-indigo-400" />,
      description: "Custom websites built for your business",
    },
    {
      title: "App Development",
      icon: <Smartphone size={48} className="text-indigo-400" />,
      description: "Mobile applications for iOS and Android",
    },
    {
      title: "E-Commerce",
      icon: <ShoppingBag size={48} className="text-indigo-400" />,
      description: "Online stores and shopping platforms",
    },
  ];

  const servicePackages: ServiceFeatures = {
    "Web Development": {
      packages: {
        "Basic Package": {
          price: "₹7,999",
          features: [
            "5 Pages",
            "Basic SEO",
            "Responsive Design",
            "Contact Form",
            "Custom Domain & Hosting",
          ],
        },
        "Standard Package": {
          price: "₹14,999",
          features: [
            "10 Pages",
            "Advanced SEO",
            "Responsive Design",
            "Social Media Integration",
            "Custom Forms",
          ],
        },
        "Premium Package": {
          price: "₹24,999",
          features: [
            "20 Pages",
            "Advanced SEO",
            "Responsive Design",
            "Custom Animations",
            "E-commerce Integration",
          ],
        },
      },
      customFeatures: [
        {
          name: "Basic Pages (5 pages)",
          price: 5000,
          description: "Simple, static web pages",
        },
        {
          name: "Additional Pages",
          price: 1000,
          description: "Price per additional page",
        },
        {
          name: "Responsive Design",
          price: 3000,
          description: "Mobile-friendly layout",
        },
        {
          name: "Contact Form",
          price: 1500,
          description: "Custom contact form with email integration",
        },
        {
          name: "Basic SEO Setup",
          price: 2000,
          description: "Essential SEO optimization",
        },
        {
          name: "Advanced SEO",
          price: 4000,
          description: "Comprehensive SEO strategy",
        },
        {
          name: "Social Media Integration",
          price: 2500,
          description: "Social media feeds and sharing",
        },
        {
          name: "Custom Animations",
          price: 3500,
          description: "Interactive UI elements",
        },
        {
          name: "Admin Dashboard",
          price: 5000,
          description: "Content management interface",
        },
        {
          name: "E-commerce Features",
          price: 7000,
          description: "Basic online store functionality",
        },
        {
          name: "Custom Domain & Hosting (1 year)",
          price: 2000,
          description: "Domain and hosting setup",
        },
        {
          name: "SSL Certificate",
          price: 1000,
          description: "Secure HTTPS connection",
        },
      ],
    },
    "App Development": {
      packages: {
        "Basic Package": {
          price: "₹19,999",
          features: [
            "Single Platform (iOS or Android)",
            "Basic Design",
            "Push Notifications",
            "User Authentication",
            "API Integration",
          ],
        },
        "Standard Package": {
          price: "₹34,999",
          features: [
            "Cross-Platform (iOS & Android)",
            "Custom Design",
            "Push Notifications",
            "User Authentication",
            "API Integration",
          ],
        },
        "Premium Package": {
          price: "₹49,999",
          features: [
            "Cross-Platform",
            "Custom Features",
            "Push Notifications",
            "E-commerce Integration",
            "Admin Dashboard",
          ],
        },
      },
      customFeatures: [
        {
          name: "iOS Development",
          price: 10000,
          description: "Native iOS app development",
        },
        {
          name: "Android Development",
          price: 10000,
          description: "Native Android app development",
        },
        {
          name: "Cross-Platform Development",
          price: 15000,
          description: "iOS and Android combined",
        },
        {
          name: "User Authentication",
          price: 4000,
          description: "Secure login system",
        },
        {
          name: "Push Notifications",
          price: 3000,
          description: "Real-time notifications",
        },
        {
          name: "Offline Support",
          price: 4000,
          description: "Work without internet",
        },
        {
          name: "API Integration",
          price: 5000,
          description: "Third-party service integration",
        },
        {
          name: "Social Login",
          price: 3000,
          description: "Login with social media",
        },
        {
          name: "In-App Purchases",
          price: 6000,
          description: "Payment integration",
        },
        {
          name: "Analytics Integration",
          price: 2500,
          description: "Usage tracking",
        },
        {
          name: "Admin Panel",
          price: 7000,
          description: "Backend management system",
        },
        {
          name: "Custom UI/UX Design",
          price: 8000,
          description: "Unique app design",
        },
      ],
    },
    "E-Commerce": {
      packages: {
        "Basic Package": {
          price: "₹29,999",
          features: [
            "10 Products",
            "Basic SEO",
            "Responsive Design",
            "Payment Gateway Integration",
            "Order Management",
          ],
        },
        "Standard Package": {
          price: "₹49,999",
          features: [
            "50 Products",
            "Advanced SEO",
            "Responsive Design",
            "Multiple Payment Gateways",
            "Admin Panel",
          ],
        },
        "Premium Package": {
          price: "₹74,999",
          features: [
            "Unlimited Products",
            "Advanced SEO",
            "Responsive Design",
            "Multiple Payment Gateways",
            "Custom Features",
          ],
        },
      },
      customFeatures: [
        {
          name: "Product Catalog (50 products)",
          price: 8000,
          description: "Basic product listing",
        },
        {
          name: "Unlimited Products",
          price: 15000,
          description: "No product limit",
        },
        {
          name: "Shopping Cart",
          price: 4000,
          description: "Cart management system",
        },
        {
          name: "Payment Gateway (Single)",
          price: 5000,
          description: "Basic payment processing",
        },
        {
          name: "Multiple Payment Gateways",
          price: 8000,
          description: "Multiple payment options",
        },
        {
          name: "Order Management",
          price: 4000,
          description: "Order tracking system",
        },
        {
          name: "Inventory Management",
          price: 5000,
          description: "Stock management",
        },
        {
          name: "Customer Accounts",
          price: 3000,
          description: "User registration and profiles",
        },
        {
          name: "Product Reviews",
          price: 2500,
          description: "Rating and review system",
        },
        {
          name: "Discount System",
          price: 3500,
          description: "Coupon and sale management",
        },
        {
          name: "Multi-currency Support",
          price: 4000,
          description: "International pricing",
        },
        {
          name: "Analytics Dashboard",
          price: 5000,
          description: "Sales and traffic analytics",
        },
      ],
    },
  };

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
    setSelectedPackage(null);
    setSelectedCustomFeatures([]);
  };

  const handlePackageClick = (packageName: string) => {
    setSelectedPackage(packageName);
    setSelectedCustomFeatures([]);
  };

  const toggleCustomFeature = (feature: Feature) => {
    setSelectedCustomFeatures((prev) => {
      const exists = prev.find((f) => f.name === feature.name);
      if (exists) {
        return prev.filter((f) => f.name !== feature.name);
      }
      return [...prev, feature];
    });
  };

  const calculateTotal = () => {
    return selectedCustomFeatures.reduce((total, feature) => total + feature.price, 0);
  };

  const generatePDF = async () => {
    if (!quotationRef.current) return;

    try {
      const canvas = await html2canvas(quotationRef.current);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();

      // Add background design
      pdf.setFillColor(247, 248, 250);
      pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight(), "F");

      // Add header
      pdf.setFillColor(79, 70, 229);
      pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), 40, "F");
      
      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(24);
      pdf.text("Custom Quotation", 20, 25);

      // Add company info
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(12);
      pdf.text("Your Company Name", 20, 50);
      pdf.setFont("helvetica", "normal");
      pdf.text("123 Business Street", 20, 60);
      pdf.text("City, State 12345", 20, 70);
      pdf.text("Phone: (123) 456-7890", 20, 80);
      pdf.text("Email: contact@yourcompany.com", 20, 90);

      // Add quotation details
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.text("Selected Service:", 20, 110);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);
      pdf.text(selectedService ? selectedService.toString() : "", 120, 110);

      // Add selected features
      pdf.setFont("helvetica", "bold");
      pdf.text("Selected Features:", 20, 130);
      pdf.setFont("helvetica", "normal");

      let yPosition = 140;
      selectedCustomFeatures.forEach((feature) => {
        pdf.text(`${feature.name} - ₹${feature.price.toLocaleString()}`, 30, yPosition);
        yPosition += 10;
      });

      // Add total
      pdf.setFont("helvetica", "bold");
      yPosition += 10;
      pdf.text(`Total Amount: ₹${calculateTotal().toLocaleString()}`, 20, yPosition);

      // Add notes if any
      if (customNotes) {
        yPosition += 20;
        pdf.setFont("helvetica", "bold");
        pdf.text("Additional Notes:", 20, yPosition);
        pdf.setFont("helvetica", "normal");
        yPosition += 10;
        
        const splitNotes = pdf.splitTextToSize(customNotes, 170);
        splitNotes.forEach((line: string) => {
          pdf.text(line, 20, yPosition);
          yPosition += 10;
        });
      }

      // Add footer
      const footerY = pdf.internal.pageSize.getHeight() - 30;
      pdf.setFontSize(10);
      pdf.setTextColor(128, 128, 128);
      pdf.text("This quotation is valid for 30 days from the date of generation.", 20, footerY);
      pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, footerY + 10);

      // Save the PDF
      pdf.save("custom-quotation.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const generatePackagePDF = async (packageName: string, details: { price: string; features: string[] }) => {
    const content = document.createElement("div");
    content.innerHTML = `
      <div style="padding: 40px; font-family: Arial, sans-serif;">
        <h1 style="color: #4F46E5; font-size: 24px; margin-bottom: 20px;">Quotation for ${selectedService} - ${packageName}</h1>
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 20px; margin-bottom: 10px;">Package Details</h2>
          <p style="font-size: 18px; color: #4F46E5; margin-bottom: 20px;">Price: ${details.price}</p>
          <h3 style="font-size: 16px; margin-bottom: 10px;">Features Included:</h3>
          <ul style="list-style-type: none; padding: 0;">
            ${details.features.map((feature) => `<li style="margin-bottom: 8px;">✓ ${feature}</li>`).join("")}
          </ul>
        </div>
        <div style="margin-top: 40px; font-size: 12px; color: #666;">
          <p>This quotation is valid for 30 days from the date of generation.</p>
          <p>Terms and conditions apply.</p>
        </div>
      </div>
    `;

    document.body.appendChild(content);
    const canvas = await html2canvas(content);
    document.body.removeChild(content);

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${selectedService}-${packageName}-quotation.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Development Services</h1>
          <p className="text-xl text-gray-600">Professional solutions for your digital needs</p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              onClick={() => handleServiceClick(service.title)}
              className={`bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
                selectedService === service.title ? "ring-2 ring-indigo-400" : ""
              }`}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Package Selection */}
        {selectedService && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Select a Package for {selectedService}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(servicePackages[selectedService].packages).map(([name, details]) => (
                <div
                  key={name}
                  className={`bg-white rounded-lg p-6 transition-all duration-300 ${
                    selectedPackage === name
                      ? "ring-2 ring-indigo-400 shadow-lg"
                      : "hover:shadow-md border border-gray-100"
                  }`}
                >
                  <div onClick={() => handlePackageClick(name)} className="cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
                    <p className="text-2xl font-bold text-indigo-600 mb-4">{details.price}</p>
                    <ul className="space-y-2">
                      {details.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600 text-sm">
                          <Check size={16} className="text-indigo-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      generatePackagePDF(name, details);
                    }}
                    className="w-full mt-8 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download size={16} />
                    Download Quotation
                  </button>
                </div>
              ))}

              {/* Custom Package Box */}
              <div
                onClick={() => handlePackageClick("Custom Package")}
                className={`bg-white rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  selectedPackage === "Custom Package"
                    ? "ring-2 ring-indigo-400 shadow-lg"
                    : "hover:shadow-md border border-gray-100"
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Package</h3>
                <p className="text-2xl font-bold text-indigo-600 mb-4">Build Your Own</p>
                <p className="text-gray-600 text-sm">Select specific features and get instant pricing</p>
              </div>
            </div>
          </div>
        )}

        {/* Custom Package Builder */}
        {selectedService && selectedPackage === "Custom Package" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Available Features */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Available Features</h3>
              <div className="space-y-4">
                {servicePackages[selectedService].customFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    onClick={() => toggleCustomFeature(feature)}
                    className={`
                      flex items-center justify-between p-4 rounded-lg cursor-pointer
                      ${
                        selectedCustomFeatures.some((f) => f.name === feature.name)
                          ? "bg-indigo-50 border-2 border-indigo-200"
                          : "bg-gray-50 hover:bg-gray-100"
                      }
                    `}
                  >
                    <div className="flex-1">
                      <div className="flex items-center">
                        {selectedCustomFeatures.some((f) => f.name === feature.name) ? (
                          <Minus className="w-5 h-5 text-indigo-500 mr-3" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-400 mr-3" />
                        )}
                        <div>
                          <p className="font-medium">{feature.name}</p>
                          <p className="text-sm text-gray-500">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                    <span className="ml-4 font-semibold">₹{feature.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Features and Quote */}
            <div ref={quotationRef} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Your Custom Package</h3>
              {selectedCustomFeatures.length > 0 ? (
                <>
                  <div className="space-y-3 mb-6">
                    {selectedCustomFeatures.map((feature) => (
                      <div key={feature.name} className="flex justify-between items-center">
                        <span className="text-gray-600">{feature.name}</span>
                        <span className="font-semibold">₹{feature.price.toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="border-t pt-3 mt-4">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total Amount</span>
                        <span className="text-indigo-600">₹{calculateTotal().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                    <textarea
                      value={customNotes}
                      onChange={(e) => setCustomNotes(e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      rows={4}
                      placeholder="Any specific requirements or notes..."
                    />
                  </div>
                  <button
                    onClick={generatePDF}
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Generate Quotation PDF
                  </button>
                </>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  Select features from the left to build your custom package
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};