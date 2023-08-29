import React, { useRef, useState } from "react";

export default function CountTime() {
  const [start, setStart] = useState(null); // State lưu trữ thời điểm bắt đầu đếm thời gian
  const [now, setNow] = useState(null); // State lưu trữ thời điểm hiện tại
  const intervalRef = useRef(null); // Ref để lưu trữ tham chiếu tới interval

  const handleStart = () => {
    setStart(Date.now()); // Cập nhật giá trị start thành thời điểm hiện tại
    setNow(Date.now()); // Cập nhật giá trị now thành thời điểm hiện tại
    clearInterval(intervalRef.current); // Xóa bỏ interval hiện tại (nếu có)
    intervalRef.current = setInterval(() => {
      setNow(Date.now()); // Cập nhật giá trị now thành thời điểm hiện tại mỗi giây
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current); // Xóa bỏ interval hiện tại
  };

  let seconds = 0; // Biến lưu trữ số giây đã trôi qua
  if (start !== null && now !== null) {
    seconds = (now - start) / 1000; // Tính toán số giây đã trôi qua
  }

  return (
    <div>
      <h1>Đếm thời gian: {seconds.toFixed(3)}</h1>
      {/* // Hiển thị số giây đã trôi qua với độ chính xác 3 chữ số thập phân */}
      <button className="btn btn-success m-3" onClick={handleStart}>
        Bắt đầu
      </button>
      {/* // Nút "Bắt đầu" để bắt đầu đếm thời gian */}
      <button className="btn btn-warning" onClick={handleStop}>
        Dừng
      </button>
      {/* // Nút "Dừng" để dừng đếm thời gian */}
    </div>
  );
}
