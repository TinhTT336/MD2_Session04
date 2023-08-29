import React from "react";

export default function ManagerStudents() {
  return (
    <>
      <div className="modal-body">
        <form>
          <div className="mb-2">
            <label htmlFor="studentCode" className="form-label">
              Mã sinh viên
            </label>
            <input type="email" className="form-control" id="studentCode" />
            <div className="text-danger">Mã sinh viên không được để trống.</div>
          </div>
          <div className="mb-2">
            <label htmlFor="studentName" className="form-label">
              Tên sinh viên
            </label>
            <input type="text" className="form-control" id="studentName" />
            <div className="text-danger">Mã sinh viên không được để trống.</div>
          </div>
          <div className="mb-2">
            <label htmlFor="dateOfBirth" className="form-label">
              Ngày sinh
            </label>
            <input type="date" className="form-control" id="dateOfBirth" />
            <div className="text-danger">Ngày sinh không được để trống.</div>
          </div>
          <div className="mb-2">
            <label htmlFor="address" className="form-label">
              Địa chỉ
            </label>
            <input type="text" className="form-control" id="address" />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
            <>
              <div className="text-danger">Email được để trống.</div>
              <div className="mb-2">
                <label htmlFor="password" className="form-label">
                  Mật khẩu
                </label>
                <input type="password" className="form-control" id="password" />
                <div className="text-danger">Mật khẩu được để trống.</div>
              </div>
              <div className="d-flex justify-content-end gap-3">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Hủy
                </button>
                <button type="button" className="btn btn-primary">
                  Cập nhật
                </button>
              </div>
            </>
          </div>
        </form>
      </div>
    </>
  );
}
