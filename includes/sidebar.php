<aside class="sidebar">
    <div class="filter-section">
      <h3>Filters</h3>
      <div class="filter-content">
        <div class="price-filter">
          <label for="price-slider">Price Range: <span id="price-display">€2000</span></label>
          <input type="range" id="price-slider" name="price-slider" min="0" max="2000" value="2000">
        </div>
        <div class="color-filter">
          <label for="color-picker">Stone Color:</label>
          <input type="color" id="color-picker" name="color-picker" value="#000000">
        </div>
        <div class="type-filter">
          <h4>Stone Types:</h4>
          <div class="checkbox-group" style="display: flex; flex-direction: column; align-items: flex-start;">
            <label style="display: flex; align-items: center;">
              <input type="checkbox" name="stone-type" value="standing" checked> Standing Stones
            </label>
            <label style="display: flex; align-items: center;">
              <input type="checkbox" name="stone-type" value="hanger" checked> Hanger Stones
            </label>
            <label style="display: flex; align-items: center;">
              <input type="checkbox" name="stone-type" value="raw" checked> Raw Stones
            </label>
          </div>
        </div>
      </div>
    </div>
  </aside>