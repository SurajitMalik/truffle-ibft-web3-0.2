pragma solidity ^0.4.24;

contract Sample{

    string public Name;

    function setName(
        string _name
    )
        external
        returns (bool)
    {
        Name = _name;
        return true;
    }
}