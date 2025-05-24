 let currentImgIndex = 0;
        const images = [
            "Images/jpg1.png",
            "Images/jpg2.png",
            "Images/jpg3.png",
            "Images/jpg4.png",
            "Images/jpg5.png",
            "Images/jpg6.png",
            "Images/jpg7.png",
            "Images/jpg8.png",
            "Images/jpg9.png",
            "Images/jpg10.png"
        ];

        function openFullImg(src) {
            const modal = document.querySelector('.full-img-modal');
            const expandedImg = document.getElementById('expandedImg');
            expandedImg.src = src;
            currentImgIndex = images.indexOf(src);
            modal.style.display = 'flex';
        }

        document.querySelector('.close-btn').onclick = function() {
            document.querySelector('.full-img-modal').style.display = 'none';
        };

        document.querySelector('.nav-left').onclick = function() {
            currentImgIndex = (currentImgIndex > 0) ? currentImgIndex - 1 : images.length - 1;
            document.getElementById('expandedImg').src = images[currentImgIndex];
        };

        document.querySelector('.nav-right').onclick = function() {
            currentImgIndex = (currentImgIndex < images.length - 1) ? currentImgIndex + 1 : 0;
            document.getElementById('expandedImg').src = images[currentImgIndex];
        };

        window.onclick = function(event) {
            const modal = document.querySelector('.full-img-modal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };