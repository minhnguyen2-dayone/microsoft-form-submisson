import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const positionOptions = [
  { value: "", label: "—" },
  { value: "Engineer", label: "Engineer" },
  { value: "Business analyst", label: "Business analyst" },
  { value: "Product manager", label: "Product manager" },
  { value: "Tester", label: "Tester" },
  { value: "Designer", label: "Designer" },
  { value: "Marketing", label: "Marketing" },
  { value: "Client Success Execusive", label: "Client Success Execusive" },
  { value: "Business Director", label: "Business Director" },
  { value: "BD Intern", label: "BD Intern" },
  { value: "Engineer Odoo", label: "Engineer Odoo" },
  { value: "Lựa chọn 11", label: "Lựa chọn 11" },
];

export const ApplicantForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      position: "",
      resume: null as File | null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().required("Required"),
      position: Yup.string().required("Required"),
      resume: Yup.mixed().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("resume", e.currentTarget.files?.[0] || null);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #e6f6f0, #e6f9e9)",
      }}
    >
      <div
        className="card shadow p-4"
        style={{ maxWidth: "600px", width: "100%", borderRadius: "10px" }}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="d-flex flex-row mb-4">
            <img
              src="https://dayoneteams.sharepoint.com/_api/v2.1/sites/dayoneteams.sharepoint.com,60092906-2596-4a87-b51b-e84a76a902f9,c779e6a7-ed47-4c05-a5e6-73b49f52b4b3/lists/7918e544-4a1b-4298-a8ad-80ab2474ccd6/items/75b0b5d3-36a9-468e-91d2-1bac803e2bf3/driveItem/thumbnails/0/c400x400/content?prefer=noredirect%2Cclosestavailablesize&cb=1&s=Znwvc2l0ZXMvRGF5b25lL0xpc3RzL1JlY3J1aXRtZW50IHRyYWNrZXJ8ZmZlNjlmYjEtYWFhYS00N2Y4LTlkMGItMTE4MWQ5MmQyMjJi"
              alt="Logo"
              width="54"
            />
            <h4 className="mt-2 fw-bold">Applicant form</h4>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">
              Your email <span className="text-danger">*</span>
            </label>
            <input
              name="email"
              type="email"
              className={`form-control ${
                formik.touched.email && formik.errors.email ? "is-invalid" : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter value here"
            />
            <div className="invalid-feedback">{formik.errors.email}</div>
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label">
              Phone number <span className="text-danger">*</span>
            </label>
            <input
              name="phone"
              type="text"
              className={`form-control ${
                formik.touched.phone && formik.errors.phone ? "is-invalid" : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              placeholder="Enter value here"
            />
            <div className="invalid-feedback">{formik.errors.phone}</div>
          </div>

          {/* Position */}
          <div className="mb-3">
            <label className="form-label">
              Position <span className="text-danger">*</span>
            </label>
            <select
              name="position"
              className={`form-select ${
                formik.touched.position && formik.errors.position
                  ? "is-invalid"
                  : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.position}
            >
              {positionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">{formik.errors.position}</div>
          </div>

          {/* Resume */}
          <div className="mb-3">
            <label className="form-label">
              Resume or CV <span className="text-danger">*</span>
            </label>
            <div className="d-flex align-items-center gap-2">
              <input
                id="resume"
                name="resume"
                type="file"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
            {formik.errors.resume && (
              <div className="text-danger mt-1 small">
                {formik.errors.resume as string}
              </div>
            )}
          </div>

          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
