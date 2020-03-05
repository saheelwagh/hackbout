pragma solidity ^0.5.0;
contract Approval {
    uint  public flagCount=0;
    struct Flag{
        uint id;
        uint lat;
        uint lon;
        bool approved;
    }
    event MarkerCreated(
        uint id,
        uint lat,
        uint lon,
        bool approved
  );
    mapping (uint=>Flag) public flags;
    function addFlag(uint lat, uint lon) public {
        flagCount++;
        flags[flagCount] = Flag(flagCount,lat,lon,false);
    }
    
  
}
