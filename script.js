const filteringButton = document.getElementById('filtering-button');
const filteringForm = document.getElementById('filtering-form');
const sortingButton = document.getElementById('sorting-button');
const sortingForm = document.getElementById('sorting-form');
const activeFilterButtonClass = 'navigation-section__filter-button--active';
const visibleFilterFormClass = 'navigation-section__filter-form--visible';
const activeSortingButtonClass = 'navigation-section__sorting-button--active';
const visibleSortingFormClass = 'navigation-section__sorting-form--visible';

if (filteringButton && filteringForm && sortingButton && sortingForm) {
    filteringButton.addEventListener('click', () => {
        filteringButton.classList.toggle(activeFilterButtonClass);
        filteringForm.classList.toggle(visibleFilterFormClass);
        if (sortingForm.classList.contains(visibleSortingFormClass)) {
            sortingButton.classList.remove(activeSortingButtonClass);
            sortingForm.classList.remove(visibleSortingFormClass);
        }
    });

    sortingButton.addEventListener('click', () => {
        sortingButton.classList.toggle(activeSortingButtonClass);
        sortingForm.classList.toggle(visibleSortingFormClass);
        if (sortingForm.classList.contains(visibleSortingFormClass)) {
            filteringButton.classList.remove(activeFilterButtonClass);
            filteringForm.classList.remove(visibleFilterFormClass);
        }
    });
}

const basketLink = document.getElementById('basket-link');
const basketPopup = document.getElementById('basket-popup');
const basketVisibleClass = 'main-header__popup--visible';
if (basketLink && basketPopup) {
    basketLink.addEventListener('mouseenter', addVisible);
    basketPopup.addEventListener('mouseenter', addVisible);
    basketLink.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (basketPopup.classList.contains(basketVisibleClass)) {
                return;
            }
            removeVisible();
        }, 500)
    });
    basketPopup.addEventListener('mouseleave', () => {
        setTimeout(() => {
            removeVisible();
        }, 200);
    });
}

function addVisible() {
    basketPopup.classList.add(basketVisibleClass);
}

function removeVisible() {
    basketPopup.classList.remove(basketVisibleClass);
}