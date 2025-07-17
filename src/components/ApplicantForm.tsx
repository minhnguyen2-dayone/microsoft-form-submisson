import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const siteId =
  "dayoneteams.sharepoint.com,60092906-2596-4a87-b51b-e84a76a902f9,c779e6a7-ed47-4c05-a5e6-73b49f52b4b3";
const listId = "8ef11bc7-0af4-4a9f-b8e1-ab0cb6e427e9";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gọi backend để lấy access token
        // const tokenRes = await axios.get("/api/token");
        // const accessToken = tokenRes.data.access_token;

        const accessToken =
          "eyJ0eXAiOiJKV1QiLCJub25jZSI6Im80cU9FeE0zNXZBZ3dUSHZvX09kVXFuajlZSWV6Y3NiVHNhbXdES0dFajgiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9qTndqZVNudlRUSzhYRWRyNVFVUGtCUkxMbyIsImtpZCI6Il9qTndqZVNudlRUSzhYRWRyNVFVUGtCUkxMbyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wM2M2MzhjZC0yZjI0LTRlMTctODBjMy1jNTY0ZGEyY2U1NzEvIiwiaWF0IjoxNzUyNzQyMDY5LCJuYmYiOjE3NTI3NDIwNjksImV4cCI6MTc1Mjc0NTk2OSwiYWlvIjoiazJSZ1lOai9QTkgrZ2JHVTZZeEhYOFdQZk4zWkN3QT0iLCJhcHBfZGlzcGxheW5hbWUiOiJUZXN0IFJlc3QiLCJhcHBpZCI6IjQwZmI1ODc5LThiYWUtNDJmNi1hM2Q2LWRmZTQyNDI5Yjc2ZCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzAzYzYzOGNkLTJmMjQtNGUxNy04MGMzLWM1NjRkYTJjZTU3MS8iLCJpZHR5cCI6ImFwcCIsIm9pZCI6IjRlNWQ2YWI2LWYzZWYtNDgyNi1iOTJlLWU2ZTUxZGIyN2RmNyIsInJoIjoiMS5BYjRBelRqR0F5UXZGMDZBdzhWazJpemxjUU1BQUFBQUFBQUF3QUFBQUFBQUFBQjdBUUMtQUEuIiwicm9sZXMiOlsiRmlsZXMuUmVhZFdyaXRlLkFwcEZvbGRlciIsIlNpdGVzLlNlbGVjdGVkIiwiRmlsZXMuU2VsZWN0ZWRPcGVyYXRpb25zLlNlbGVjdGVkIiwiTGlzdEl0ZW1zLlNlbGVjdGVkT3BlcmF0aW9ucy5TZWxlY3RlZCIsIlNpdGVzLlJlYWQuQWxsIiwiU2l0ZXMuUmVhZFdyaXRlLkFsbCIsIlNpdGVzLk1hbmFnZS5BbGwiLCJGaWxlcy5SZWFkV3JpdGUuQWxsIiwiU2l0ZXMuQXJjaGl2ZS5BbGwiLCJGaWxlcy5SZWFkLkFsbCIsIkxpc3RzLlNlbGVjdGVkT3BlcmF0aW9ucy5TZWxlY3RlZCIsIlNpdGVzLkZ1bGxDb250cm9sLkFsbCJdLCJzdWIiOiI0ZTVkNmFiNi1mM2VmLTQ4MjYtYjkyZS1lNmU1MWRiMjdkZjciLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiIwM2M2MzhjZC0yZjI0LTRlMTctODBjMy1jNTY0ZGEyY2U1NzEiLCJ1dGkiOiJSY0p5dFo1NFFrdVBDRzl6c1R3eUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyIwOTk3YTFkMC0wZDFkLTRhY2ItYjQwOC1kNWNhNzMxMjFlOTAiXSwieG1zX2Z0ZCI6IldtMkFqMG5pazREaFZpQ2N0eFRYdFdqQlhTY3pCX2tLYldFTlI3VzllU2NCYTI5eVpXRmpaVzUwY21Gc0xXUnpiWE0iLCJ4bXNfaWRyZWwiOiI3IDYiLCJ4bXNfcmQiOiIwLjQyTGpZQkppMnNjb0pNTEJMaVN3OGYwMlJldlhxVzV6RDFoT1pDaWNmZ29veWlra1lNZWVHWlU1TjlTdGFmSnFBY1pmUjc0QVJUbUVCSmdaSU9BQWxBWUEiLCJ4bXNfdGNkdCI6MTc0OTIwMjc3Mn0.UkLo11DQ9Io_lSFFcXFRXu00Bnh94ZQ4DIZ4pR0NceSw5x52_6NgsIvDDh1bJJ8WYCc_n0eIEM1mZ01fY9PRYuCQKFOz99ImGsy007WSC5LAgvbYwVCU0PHT12Pufgq3VWmFX7DEyEJkz6D6mxuD3yFxCk-ESZxBqLnw6H_1rvx4XeLbtKzOjUZWu0RE-8DyEDqjf6Eh57CDL176ZZoFqVHZzyoMFyAXwyJQxDHZeRpaXvgamkBDAjZlmL4iTvAR_S401J8W3IC49dt2944vj6jM19h26iV2FiATLEhGnOokG7p7TAN5zxj63eGABsbJQDssXWgjVT14HCigotkQlQ";

        // Gọi Microsoft Graph API
        const graphRes = await axios.get(
          `https://graph.microsoft.com/v1.0/sites/${siteId}/lists/${listId}/items?expand=fields`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log("Graph data:", graphRes.data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, []);

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
