"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { assets } from "@/Assets/assets";


export default function Inscription() {
  const [formData, setFormData] = useState({
    nom: "",
    phone: "",
    email: "",
    role: "",
    motivation: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/[^0-9]/g, "") : value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }

    setSubmitError(null);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = "Ce champ est obligatoire";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Ce champ est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Ce champ est obligatoire";
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = "Le téléphone ne doit contenir que des chiffres";
    }

    if (!formData.role) {
      newErrors.role = "Veuillez sélectionner une option";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("api/inscription", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Server Error:", {
          status: response.status,
          statusText: response.statusText,
          errorData,
        });
        throw new Error("Une erreur est survenue lors de l'envoi du formulaire");
      }

      const data = await response.json();
      console.log("Success:", data);
      setSubmitSuccess(true);
      setFormData({
        nom: "",
        phone: "",
        email: "",
        role: "",
        motivation: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitError("Une erreur est survenue lors de l'envoi du formulaire");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-2xl lg:max-w-3xl bg-white rounded-xl shadow-lg shadow-gray-600 overflow-hidden"
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <Image src={assets.seed_logo} width={40} height={40} alt="SEED Logo" className="object-cover select-none"/>
          <span><h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
            Candidature
          </h2> </span>
          <button
          
            onClick={() => router.back()}
            className="px-3 py-1 bg-red-700 text-white rounded-md select-none hover:bg-red-600 transition-colors cursor-pointer"
          >
            X
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-200px)] p-6">
          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg p-4 mb-6 bg-green-50 text-green-700 rounded-lg border border-green-200 text-center"
            >
              Merci pour l'intérêt témoigné à notre organisation ! Nous allons
              bientôt vous contacter.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg p-4 mb-6 bg-red-50 text-red-700 rounded-lg border border-red-200 text-center"
                >
                  Une erreur est survenue lors de l'envoi du formulaire
                </motion.div>
              )}

              <div>
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Votre nom ou celui de l'entreprise <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-0.5 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.nom
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  placeholder="Votre nom ou le nom de votre entreprise"
                />
                {errors.nom && (
                  <p className="mt-2 text-sm text-red-500">{errors.nom}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Votre téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-0.5 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                      errors.phone
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Votre numéro de téléphone"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Votre email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-0.5 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                      errors.email
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Votre adresse email"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-0.5 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.role
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <option value="">Qui voulez-vous devenir ?</option>
                  <option value="donateur">Donateur</option>
                  <option value="partenaire">Partenaire</option>
                  <option value="benevole">Bénévole</option>
                </select>
                {errors.role && (
                  <p className="mt-2 text-sm text-red-500">{errors.role}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="motivation"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Votre message (facultatif)
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0.5 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none hover:border-gray-400"
                  placeholder="Que souhaitez-vous que l'on apprenne de vous ?"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer"
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                <span className="text-red-500">*</span> Champs obligatoires
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
