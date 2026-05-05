
        // --- Bubbles ---
        (function(){
            const wrap = document.getElementById('bubbles');
            for(let i=0;i<18;i++){
                const b = document.createElement('div');
                b.className='bubble';
                const sz = 30 + Math.random()*80;
                b.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;bottom:-10%;animation-duration:${8+Math.random()*10}s;animation-delay:${Math.random()*8}s;`;
                wrap.appendChild(b);
            }
        })();

        // --- Smooth scroll ---
        document.querySelectorAll('a[href^="#"]').forEach(a=>{
            a.addEventListener('click',function(e){
                const t=document.querySelector(this.getAttribute('href'));
                if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}
            });
        });

        // --- Certificate upload ---
        function uploadCert(num, input) {
            event.stopPropagation();
            const file = input.files[0];
            if(!file) return;
            const reader = new FileReader();
            reader.onload = function(e){
                const img = document.getElementById('cert-img-' + num);
                img.src = e.target.result;
                img.classList.add('loaded');
                // Hide placeholder
                const wrap = img.closest('.cert-img-wrap');
                wrap.querySelector('.cert-placeholder-icon').style.display='none';
                wrap.querySelector('.cert-placeholder-text').style.display='none';
            };
            reader.readAsDataURL(file);
        }

        // --- Project image upload ---
        function uploadProject(num, input) {
            event.stopPropagation();
            const file = input.files[0];
            if(!file) return;
            const reader = new FileReader();
            reader.onload = function(e){
                const img = document.getElementById('proj-img-' + num);
                img.src = e.target.result;
                img.classList.add('loaded');
                const area = img.closest('.project-img-area');
                area.querySelector('.project-img-placeholder').style.display='none';
                area.querySelector('.project-img-label').style.display='none';
                area.querySelector('.project-img-upload-btn').textContent='📷 Change Photo';
            };
            reader.readAsDataURL(file);
        }

        // --- Prevent cert card click from triggering when editing text ---
        document.querySelectorAll('.editable').forEach(el=>{
            el.addEventListener('click', e => e.stopPropagation());
        });
