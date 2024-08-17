// Dans votre fichier scripts.js

export function showBlogResetNotification() {
    Swal.fire({
        position: "top-end",
        showConfirmButton: false,
        text: "Blog reset, next reset in 1 hour.",
        timer: 6000,
        toast: true,
        timerProgressBar: true,
        showCloseButton: true,
        icon: "info"
    });
}

export function showBlogPreResetNotification() {
    Swal.fire({
        position: "top-end",
        showConfirmButton: false,
        text: "Blog reset in 5 minutes.",
        timer: 4000,
        toast: true,
        timerProgressBar: true,
        showCloseButton: true,
        icon: "info"
    });
}

export function showCancelCreationEditConfirmation() {
    return Swal.fire({
        title: 'You will lose your changes!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel'
    });
}

export function showDeleteArticleConfirmation() {
    return Swal.fire({
        title: 'Delete Article?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel'
    });
}