/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";

import { Camera, Plus, Trash2, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

import Button from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

interface PromoItem {
  id: number;
  title: string;
  link: string;
  thumbnail: string;
}

interface BannerFile {
  file: File;
  preview: string;
}

interface BannerUploads {
  [key: string]: BannerFile | null;
}

const initialPromoItems: PromoItem[] = [
  {
    id: 1,
    title: "Promo Title",
    link: "https://www.figma.com......",
    thumbnail:
      "https://i.ibb.co/SD2r0gdq/165f2a95b349ab48645d8642a6be77a1048ca064.png",
  },
  {
    id: 2,
    title: "Promo Title",
    link: "https://www.figma.com......",
    thumbnail:
      "https://i.ibb.co/SD2r0gdq/165f2a95b349ab48645d8642a6be77a1048ca064.png",
  },
  {
    id: 3,
    title: "Promo Title",
    link: "https://www.figma.com......",
    thumbnail:
      "https://i.ibb.co/SD2r0gdq/165f2a95b349ab48645d8642a6be77a1048ca064.png",
  },
  {
    id: 4,
    title: "Promo Title",
    link: "https://www.figma.com......",
    thumbnail:
      "https://i.ibb.co/SD2r0gdq/165f2a95b349ab48645d8642a6be77a1048ca064.png",
  },
];

const bannerCategories = [
  { title: "Upload MensWare Banner", id: "menswear" },
  { title: "Upload WomensWare Banner", id: "womenswear" },
  { title: "Upload Both Section Banner", id: "both-section" },
  { title: "Upload Streetware Banner", id: "streetware" },
  { title: "Upload Vintage Banner", id: "vintage" },
  { title: "Upload Sportsware Banner", id: "sportsware" },
  { title: "Upload Luxury Banner", id: "luxury" },
  { title: "Upload Independent Banner", id: "independent" },
  { title: "Upload Oldfashion Banner", id: "oldfashion" },
];

function FileUploadCard({
  title,
  id,
  uploadedFile,
  onFileUpload,
}: {
  title: string;
  id: string;
  uploadedFile: BannerFile | null;
  onFileUpload: (id: string, file: File | null) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
        alert("Please select a JPG, JPEG, or PNG file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      onFileUpload(id, file);
    }
  };

  const handleRemoveFile = () => {
    onFileUpload(id, null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-3 w-full">
      <h3 className="text-sm sm:text-base font-medium text-gray-700">
        {title}
      </h3>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-8 text-center bg-gray-50 relative">
        {uploadedFile ? (
          <div className="relative">
            <Image
              src={uploadedFile.preview || "/placeholder.svg"}
              alt="Uploaded banner"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-24 sm:h-32 object-cover rounded"
            />
            <Button
              onClick={handleRemoveFile}
              size="sm"
              className="absolute top-2 right-2 h-8 w-8 p-0"
              aria-label="Remove uploaded file"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 sm:w-14 h-12 sm:h-14 bg-red-100 rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6 text-red-600" />
            </div>
            <div className="space-y-1">
              <p className="text-xs sm:text-sm text-gray-500">
                Formats: JPG, PNG, JPEG - Optimal dimensions
              </p>
              <p className="text-xs sm:text-sm text-gray-500">3200 x 410px</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png"
          onChange={handleFileSelect}
          className="hidden"
        />
        <Button
          variant="outline"
          size="sm"
          className="text-xs sm:text-sm bg-transparent py-2 px-4"
          onClick={() => fileInputRef.current?.click()}
          aria-label="Choose file for upload"
        >
          Choose File
        </Button>
        <span className="text-xs sm:text-sm text-gray-500">
          {uploadedFile ? uploadedFile.file.name : "No File Chosen"}
        </span>
      </div>
    </div>
  );
}

function PromoModal({
  isOpen,
  onClose,
  onSave,
  editingPromo,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (promo: Omit<PromoItem, "id">) => void;
  editingPromo?: PromoItem | null;
}) {
  const [title, setTitle] = useState(editingPromo?.title || "");
  const [link, setLink] = useState(editingPromo?.link || "");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(
    editingPromo?.thumbnail || ""
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleThumbnailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
        alert("Please select a JPG, JPEG, or PNG file");
        return;
      }
      setThumbnail(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!title.trim() || !link.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    onSave({
      title: title.trim(),
      link: link.trim(),
      thumbnail:
        thumbnailPreview ||
        "https://i.ibb.co/SD2r0gdq/165f2a95b349ab48645d8642a6be77a1048ca064.png",
    });

    setTitle("");
    setLink("");
    setThumbnail(null);
    setThumbnailPreview("");
    onClose();
  };

  const handleClose = () => {
    setTitle("");
    setLink("");
    setThumbnail(null);
    setThumbnailPreview("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-full max-w-[90vw] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">
            {editingPromo ? "Edit Promo" : "Create New Promo"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 max-h-[70vh] overflow-y-auto px-2">
          <div>
            <Label htmlFor="title" className="text-sm sm:text-base">
              Title *
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter promo title"
              className="text-sm sm:text-base py-2"
            />
          </div>
          <div>
            <Label htmlFor="link" className="text-sm sm:text-base">
              Link *
            </Label>
            <Input
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://www.example.com"
              className="text-sm sm:text-base py-2"
            />
          </div>
          <div>
            <Label htmlFor="thumbnail" className="text-sm sm:text-base">
              Thumbnail
            </Label>
            <div className="mt-2">
              {thumbnailPreview && (
                <div className="mb-2">
                  <Image
                    src={thumbnailPreview || "/placeholder.svg"}
                    alt="Thumbnail preview"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-20 sm:h-24 rounded border"
                  />
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png"
                onChange={handleThumbnailChange}
                className="hidden"
              />
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="py-2 px-4 text-sm sm:text-base"
                onClick={() => fileInputRef.current?.click()}
                aria-label="Choose thumbnail image"
              >
                Choose Thumbnail
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter className="mt-4">
          <Button
            size="sm"
            variant="outline"
            onClick={handleClose}
            className="py-2 px-4 text-sm sm:text-base"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={handleSave}
            className="py-2 px-4 text-sm sm:text-base"
          >
            {editingPromo ? "Update" : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function PromoAndBanners() {
  const [activeTab, setActiveTab] = useState("promo");
  const [promoItems, setPromoItems] = useState<PromoItem[]>(initialPromoItems);
  const [bannerUploads, setBannerUploads] = useState<BannerUploads>({});
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [editingPromo, setEditingPromo] = useState<PromoItem | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);

  const handleFileUpload = (categoryId: string, file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBannerUploads((prev) => ({
          ...prev,
          [categoryId]: {
            file,
            preview: e.target?.result as string,
          },
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setBannerUploads((prev) => {
        const updated = { ...prev };
        delete updated[categoryId];
        return updated;
      });
    }
  };

  const handleCreatePromo = (promoData: Omit<PromoItem, "id">) => {
    const newId = Math.max(...promoItems.map((p) => p.id), 0) + 1;
    setPromoItems((prev) => [...prev, { ...promoData, id: newId }]);
  };

  const handleEditPromo = (promoData: Omit<PromoItem, "id">) => {
    if (editingPromo) {
      setPromoItems((prev) =>
        prev.map((item) =>
          item.id === editingPromo.id
            ? { ...promoData, id: editingPromo.id }
            : item
        )
      );
      setEditingPromo(null);
    }
  };

  const handleDeletePromo = (id: number) => {
    setPromoItems((prev) => prev.filter((item) => item.id !== id));
    setDeleteConfirmId(null);
  };

  const openEditModal = (promo: PromoItem) => {
    setEditingPromo(promo);
    setIsPromoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-full sm:max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Promo & Banners
          </h1>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full sm:w-fit grid-cols-1 sm:grid-cols-2 bg-transparent p-0 h-auto">
              <TabsTrigger
                value="promo"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:rounded-none px-0 pb-2 sm:mr-8 font-medium text-sm sm:text-base"
              >
                Promo
              </TabsTrigger>
              <TabsTrigger
                value="banners"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:rounded-none px-0 pb-2 font-medium text-sm sm:text-base text-gray-600"
              >
                Banners
              </TabsTrigger>
            </TabsList>

            <TabsContent value="promo" className="mt-8">
              <div className="space-y-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPromoModalOpen(true)}
                  className="flex items-center text-black space-x-2 border border-primary hover:text-white rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base"
                  aria-label="Create new promo"
                >
                  <Plus className="w-4 h-4" />
                  <Link href="/admin/dashboard/promo_banners/create_new_promo">
                    <span>Create New</span>
                  </Link>
                </Button>

                <div className="space-y-4">
                  {promoItems.map((item) => (
                    <Card key={item.id} className="p-4 bg-white shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-20 h-12 bg-red-500 rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={item.thumbnail || "/placeholder.svg"}
                              alt="Promo thumbnail"
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="w-full h-full object-cover"
                              priority
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500">
                              Link: {item.link}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => openEditModal(item)}
                            className="  px-6 py-2  text-sm sm:text-base"
                            aria-label={`Edit promo ${item.title}`}
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            className="text-gray-400 hover:text-gray-600 p-2"
                            onClick={() => setDeleteConfirmId(item.id)}
                            aria-label={`Delete promo ${item.title}`}
                          >
                            <Trash2 className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="banners" className="mt-8">
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {bannerCategories.slice(0, 3).map((category) => (
                    <FileUploadCard
                      key={category.id}
                      title={category.title}
                      id={category.id}
                      uploadedFile={bannerUploads[category.id] || null}
                      onFileUpload={handleFileUpload}
                    />
                  ))}
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">
                    Change interests banner
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {bannerCategories.slice(3).map((category) => (
                      <FileUploadCard
                        key={category.id}
                        title={category.title}
                        id={category.id}
                        uploadedFile={bannerUploads[category.id] || null}
                        onFileUpload={handleFileUpload}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* <PromoModal
        isOpen={isPromoModalOpen}
        onClose={() => {
          setIsPromoModalOpen(false);
          setEditingPromo(null);
        }}
        onSave={editingPromo ? handleEditPromo : handleCreatePromo}
        editingPromo={editingPromo}
      /> */}

      {/* <AlertDialog
        open={deleteConfirmId !== null}
        onOpenChange={() => setDeleteConfirmId(null)}
      >
        <AlertDialogContent className="w-full max-w-[90vw] sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg sm:text-xl">
              Delete Promo
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm sm:text-base">
              Are you sure you want to delete this promo? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="py-2 px-4 text-sm sm:text-base">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                deleteConfirmId && handleDeletePromo(deleteConfirmId)
              }
              className="bg-red-600 hover:bg-red-700 py-2 px-4 text-sm sm:text-base"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog> */}
    </div>
  );
}
