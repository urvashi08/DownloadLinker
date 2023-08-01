const fileUrl = document.querySelector("input");
        const downloadBtn = document.querySelector("button");

        downloadBtn.addEventListener('click', async () => {
            try {
                if (fileUrl.value.trim() === '') {
                    alert('Please enter a valid file URL.');
                    return;
                }
                const response = await fetch(fileUrl.value);
                const file = await response.blob();
                const link = document.createElement("a");
                link.href = URL.createObjectURL(file);
                link.download = new Date().getTime();
                link.click();
                fileUrl.value = '';
            } catch (error) {
                alert('Failed to download the file.');
            }
        });