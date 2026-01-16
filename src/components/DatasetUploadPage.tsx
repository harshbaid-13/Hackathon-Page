import React, { useState, FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Upload,
  Loader2,
  CheckCircle2,
  XCircle,
  FileSpreadsheet,
  User,
  Mail,
  Database,
  CloudUpload,
  Info,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function DatasetUploadPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [submitterName, setSubmitterName] = useState("");
  const [datasetType, setDatasetType] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [submitMessage, setSubmitMessage] = useState("");
  const [about, setAbout] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    processFile(selectedFile);
  };

  const processFile = (selectedFile: File | undefined) => {
    setFileError("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    const fileName = selectedFile.name.toLowerCase();
    if (!fileName.endsWith(".csv")) {
      setFileError("Please upload a CSV file only");
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    processFile(droppedFile);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!submitterName.trim()) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter your name");
      return;
    }

    if (!datasetType) {
      setSubmitStatus("error");
      setSubmitMessage("Please select a dataset type");
      return;
    }

    if (!email.trim()) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter a valid email address");
      return;
    }

    if (!about.trim()) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter a dataset description");
      return;
    }

    if (!file) {
      setSubmitStatus("error");
      setSubmitMessage("Please upload a CSV file");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const formData = new FormData();
      formData.append("submitterName", submitterName.trim());
      formData.append("datasetType", datasetType);
      formData.append("email", email.trim());
      formData.append("file", file);
      formData.append("description", about.trim());

      const response = await fetch("/dhs-hackathon/data", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        const errorMessage =
          responseData.message || `Server error: ${response.status}`;
        throw new Error(errorMessage);
      }

      setSubmitStatus("success");
      setSubmitMessage("Dataset uploaded successfully! Redirecting...");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Upload error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? `Upload failed: ${error.message}`
          : "Upload failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    navigate("/");
  };

  const datasetTypes = [
    { value: "BAP", label: "BAP", description: "Bone Age Prediction" },
    { value: "DR", label: "DR", description: "Diabetic Retinopathy" },
    { value: "CD", label: "CD", description: "Cataract Detection" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50/30 font-sans">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-slate-200/80 backdrop-blur-sm bg-white/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <button
              onClick={goBack}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all duration-200 border border-slate-200"
            >
              <ArrowLeft size={18} />
            </button>
            <div>
              <h1 className="text-lg font-semibold text-slate-900 tracking-tight">
                Dataset Upload
              </h1>
              <p className="text-xs text-slate-500">
                Submit your research data
              </p>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-500 to-cyan-500 mb-6 shadow-lg shadow-emerald-500/30">
            <CloudUpload className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Upload Your Dataset
          </h2>
          <p className="text-slate-600 max-w-md mx-auto">
            Share your research data for the NHA-IITK-ICMR Hackathon. All
            submissions are securely processed.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <User className="w-4 h-4 text-emerald-600" />
                Name of Submitter
                <span className="text-emerald-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={submitterName}
                onChange={(e) => setSubmitterName(e.target.value)}
                disabled={isSubmitting}
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:bg-white transition-all duration-200 disabled:opacity-50"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Mail className="w-4 h-4 text-emerald-600" />
                Email Address
                <span className="text-emerald-600">*</span>
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:bg-white transition-all duration-200 disabled:opacity-50"
              />
            </div>

            {/* About Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Info className="w-4 h-4 text-emerald-600" />
                Dataset Description
                <span className="text-emerald-600">*</span>
              </label>
              <textarea
                placeholder="Briefly describe yourself or your organization, and your involvement with the dataset (max 300 characters)"
                value={about}
                onChange={(e) => setAbout(e.target.value.slice(0, 300))}
                disabled={isSubmitting}
                rows={3}
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:bg-white transition-all duration-200 disabled:opacity-50 resize-none"
                maxLength={300}
              />
              <div className="text-xs text-slate-400 text-right">
                {about.length}/300
              </div>
            </div>

            {/* Dataset Type Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Database className="w-4 h-4 text-emerald-600" />
                Dataset Type
                <span className="text-emerald-600">*</span>
              </label>
              <Select
                value={datasetType}
                onValueChange={setDatasetType}
                disabled={isSubmitting}
              >
                <SelectTrigger className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:bg-white transition-all duration-200 disabled:opacity-50 h-auto">
                  <SelectValue placeholder="Select a dataset type" />
                </SelectTrigger>
                <SelectContent className="bg-white border-slate-200 shadow-lg">
                  {datasetTypes.map((type) => (
                    <SelectItem
                      key={type.value}
                      value={type.value}
                      className="text-slate-900 hover:bg-emerald-50 focus:bg-emerald-50 cursor-pointer"
                    >
                      <span className="font-medium">{type.label}</span>
                      <span className="text-slate-500 ml-2">
                        — {type.description}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* File Upload Area */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                Upload CSV File
                <span className="text-emerald-600">*</span>
              </label>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-300 ${
                  isDragging
                    ? "border-emerald-500 bg-emerald-50"
                    : file
                    ? "border-emerald-400 bg-emerald-50/50"
                    : "border-slate-300 hover:border-emerald-400 bg-slate-50 hover:bg-emerald-50/30"
                } ${isSubmitting ? "pointer-events-none opacity-50" : ""}`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  disabled={isSubmitting}
                  className="hidden"
                />
                <div className="p-8 text-center">
                  {file ? (
                    <div className="space-y-3">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-100">
                        <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-slate-900 font-medium">
                          {file.name}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          {(file.size / 1024).toFixed(1)} KB • Click to change
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-100">
                        <Upload className="w-7 h-7 text-slate-400" />
                      </div>
                      <div>
                        <p className="text-slate-700 font-medium">
                          Drop your CSV file here
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          or click to browse from your computer
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {fileError && (
                <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                  <XCircle className="w-4 h-4" />
                  {fileError}
                </div>
              )}
            </div>

            {/* Status Messages */}
            {submitStatus && (
              <div
                className={`p-4 rounded-xl flex items-center gap-3 ${
                  submitStatus === "success"
                    ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
                    : "bg-red-50 border border-red-200 text-red-700"
                }`}
              >
                {submitStatus === "success" ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 shrink-0" />
                )}
                <p className="text-sm font-medium">{submitMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 h-auto bg-linear-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Uploading Dataset...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Dataset
                </span>
              )}
            </Button>
          </form>

          {/* Footer note */}
          {/* <div className="px-8 py-4 bg-slate-50 border-t border-slate-100">
            <p className="text-xs text-slate-500 text-center">
              By uploading, you agree to the hackathon's data submission
              guidelines. Your data will be processed securely.
            </p>
          </div> */}
        </div>
      </main>
    </div>
  );
}
