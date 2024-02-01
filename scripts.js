const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = 'block';
                scrollToTopBtn.style.opacity = '1';
            } else {
                scrollToTopBtn.style.opacity = '0';
                setTimeout(() => {
                    scrollToTopBtn.style.display = 'none';
                }, 300);
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            scrollToTop();
        });

        function scrollToTop() {
            const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

            if (currentPosition > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, currentPosition - currentPosition / 8);
            }
        }


    const mainMenu = document.getElementById('mainMenu');

 
    const menuItems = document.querySelectorAll('#mainMenu li');

        // Додаємо обробник кліку до кожного елемента li
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                // Прибираємо активний клас у всіх елементів
                menuItems.forEach(otherItem => {
                    otherItem.querySelector('a').classList.remove('text-white', 'bg-[#99BAED]');
                });

                // Додаємо активні класи тільки для натиснутого елемента
                item.querySelector('a').classList.add('text-white', 'bg-[#99BAED]');
            });
        });