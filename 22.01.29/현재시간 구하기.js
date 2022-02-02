const Clock = {
    getCurrentTime: function (date) {
      if (!(date instanceof Date))
              return "현재 시간을 구할 수 없습니다."
      
      
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const min = date.getMinutes()
      const sec = date.getSeconds()
      
      return `현재 시간은 ${year}년 ${month}월 ${day}일 ${hour}시 ${min}분 ${sec}초 입니다.`
      
    },
  };
  
  export default Clock;
  

  const Clock = {
    getCurrentTime: function (date) {
      if (date instanceof Date == false)
          return "현재 시간을 구할 수 없습니다.";
      
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      let hour = date.getHours()
      let min = date.getMinutes()
      let sec = date.getSecounds()
      
      return `현재 시간은 ${year}년 ${month}월 ${day}일 ${hour}시 ${min}분 ${sec}초 입니다.`
      
      
    },
  };
  
  export default Clock;
  