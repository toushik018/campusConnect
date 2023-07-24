import { QueryClient, useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const addCollege = async (data) => {
    const response = await fetch("https://campus-connect-server-toushik018.vercel.app/colleges", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to add college");
    }

    return response.json();
};

const imageHostingToken = import.meta.env.VITE_image_hosating;


const AddColleges = () => {
    const queryClient = new QueryClient();
    const mutation = useMutation(addCollege, {
        onSuccess: () => {
            queryClient.invalidateQueries("colleges");
        },
    });

    const { register, handleSubmit, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);



        try {
            const imageResponse = await fetch(img_hosting_url, {
              method: "POST",
              body: formData,
            });
      
            if (!imageResponse.ok) {
              throw new Error("Failed to upload image");
            }
      
            const imageResult = await imageResponse.json();
            if (imageResult.success) {
              const imgURL = imageResult.data.display_url;
              const tourData = { ...data, image: imgURL };
      
              await mutation.mutateAsync(tourData);
              console.log("Tour added successfully:", tourData);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'College added successfully',
                showConfirmButton: false,
                timer: 1500,
            });
            } else {
              throw new Error("Failed to get image URL");
            }
          } catch (error) {
            console.error("Error adding tour:", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 lg:pl-16 md:pl-16">
            <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-semibold mb-6 text-center">Add a College</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="collegeName">
                            College Name
                        </label>
                        <input
                            type="text"
                            className="form-input w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            {...register('collegeName', { required: true })}
                        />
                        {errors.collegeName && (
                            <span className="text-red-500 text-sm mt-1">This field is required</span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admissionProcess">
                            Admission Process
                        </label>
                        <textarea
                            className="form-textarea w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            {...register("admissionProcess", { required: true })}
                        />
                        {errors.admissionProcess && (
                            <span className="text-red-500 text-sm mt-1">This field is required</span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="admissionDate"
                        >
                            Admission Date
                        </label>
                        <input
                            type="date"
                            className="form-input w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            {...register("admissionDate", { required: true })}
                        />
                        {errors.admissionDate && (
                            <span className="text-red-500 text-sm mt-1">
                                This field is required
                            </span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventsDetails">
                            Events Details
                        </label>
                        <textarea
                            className="form-textarea w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            {...register("eventsDetails", { required: true })}
                        />
                        {errors.eventsDetails && (
                            <span className="text-red-500 text-sm mt-1">This field is required</span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="researchWorks">
                            Research Works
                        </label>
                        <textarea
                            className="form-textarea w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            {...register("researchWorks", { required: true })}
                        />
                        {errors.researchWorks && (
                            <span className="text-red-500 text-sm mt-1">This field is required</span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="NumResearchWorks">
                            Number of Research Works
                        </label>
                        <input
                            type="number"
                            className="form-textarea w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            {...register("NumResearchWorks", { required: true })}
                        />
                        {errors.NumResearchWorks && (
                            <span className="text-red-500 text-sm mt-1">This field is required</span>
                        )}
                    </div>



                    <div className="mb-6">
                        <select
                            className="form-select w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            {...register("sportsCategories", { required: true })}
                        >
                            <option value="">Select a sports category</option>
                            <option value="Football">Football</option>
                            <option value="Basketball">Basketball</option>
                            <option value="Athletics">Athletics</option>
                            <option value="Volleyball">Volleyball</option>
                            <option value="Tennis">Tennis</option>
                            <option value="Badminton">Badminton</option>
                            <option value="Cricket">Cricket</option>
                            <option value="Baseball">Baseball</option>
                            <option value="Rugby">Rugby</option>
                            <option value="Hockey">Hockey</option>
                            <option value="Golf">Golf</option>
                            <option value="Table Tennis">Table Tennis</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Soccer">Soccer</option>
                            {/* Add more sports categories as needed */}
                        </select>
                    </div>


                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="about">
                            About
                        </label>
                        <textarea
                            className="form-textarea w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            {...register("about", { required: true })}
                        />
                        {errors.about && (
                            <span className="text-red-500 text-sm mt-1">This field is required</span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input
                            type="text"
                            className="form-input w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            {...register('location', { required: true })}
                        />
                        {errors.location && (
                            <span className="text-red-500 text-sm mt-1">This field is required</span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
                            Website
                        </label>
                        <input
                            type="text"
                            className="form-input w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
                            {...register('website', { required: true })}
                        />
                        {errors.website && (
                            <span className="text-red-500 text-sm mt-1">This field is required</span>
                        )}
                    </div>

                    {/* Upload image */}
                    <div className="form-control w-full max-w-xs mb-4">
                        <label className="label">
                            <span className="label-text">Upload an Image</span>
                        </label>
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered w-full max-w-xs"
                        />
                        {errors.image && (
                            <span className="text-red-500 text-sm mt-1">This field is required</span>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={mutation.isLoading}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {mutation.isLoading ? "Adding College..." : "Add College"}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddColleges;
